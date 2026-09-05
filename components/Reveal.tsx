"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ElementType, ReactNode } from "react";

/**
 * La única animación del sitio: cada sección aparece al entrar en pantalla.
 * Parámetros fijados en DESIGN.md §6 — 0,5 s, desplazamiento 24 px, una sola
 * vez, escalonado de 0,07 s entre hijos; sólo transform y opacity.
 *
 * Con prefers-reduced-motion se devuelve el bloque estático: sin desplazamiento
 * ni retardos, no «lo mismo pero más rápido».
 */

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  as = "div",
  children,
  className,
  id,
  delay = 0,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Contenedor de lista: los hijos entran uno tras otro, no todos a la vez. */
export function RevealGroup({
  as = "div",
  children,
  className,
  id,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  const variants: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: 0.07 } },
  };

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </MotionTag>
  );
}

/** Hijo de RevealGroup. Fuera del grupo se comporta como un bloque normal. */
export function RevealItem({
  as = "div",
  children,
  className,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  };

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
