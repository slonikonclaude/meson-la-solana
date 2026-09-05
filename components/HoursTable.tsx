"use client";

import { useSyncExternalStore } from "react";
import type { IsoDay } from "@/lib/restaurant";
import type { Dictionary } from "@/lib/dictionaries";

type Slot = { open: string; close: string };

/**
 * El día de hoy se lee del reloj del navegador con useSyncExternalStore:
 * en servidor (y en el HTML exportado) no hay día marcado, y al hidratar se
 * marca sin provocar un segundo renderizado en cascada. No hay suscripción:
 * el día no cambia mientras se lee la página.
 */
const noop = () => () => {};
const readToday = (): IsoDay => {
  const js = new Date().getDay(); // 0 = domingo
  return (js === 0 ? 7 : js) as IsoDay;
};
const readNothing = (): IsoDay | null => null;

/**
 * Tabla semanal de horario. Marca la fila de hoy — sólo eso. No calcula
 * «abierto/cerrado ahora»: en una página estática mentiría a la primera
 * modificación del horario (DESIGN.md §5).
 */
export function HoursTable({
  dict,
  days,
  hours,
}: {
  dict: Dictionary;
  days: IsoDay[];
  hours: Record<IsoDay, readonly Slot[]>;
}) {
  const today = useSyncExternalStore(noop, readToday, readNothing);

  return (
    <table className="w-full border-collapse text-[0.9375rem]">
      <caption className="sr-only">{dict.visit.hoursTitle}</caption>
      <tbody>
        {days.map((day) => {
          const slots = hours[day];
          const isToday = day === today;
          return (
            <tr
              key={day}
              className={[
                "border-b border-border",
                isToday ? "bg-muted font-semibold text-foreground" : "text-foreground",
              ].join(" ")}
            >
              <th scope="row" className="py-2 pr-4 text-left font-medium">
                {dict.visit.days[day]}
                {isToday ? (
                  <span className="ml-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {dict.visit.todayLabel}
                  </span>
                ) : null}
              </th>
              <td className="py-2 text-right tabular">
                {slots.length === 0 ? (
                  <span className="text-muted-foreground">{dict.visit.closed}</span>
                ) : (
                  slots.map((s, i) => (
                    <span key={s.open} className="inline-block">
                      {i > 0 ? <span className="mx-1.5 text-muted-foreground">·</span> : null}
                      {s.open}–{s.close}
                    </span>
                  ))
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
