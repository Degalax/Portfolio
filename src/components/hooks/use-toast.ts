"use client"

// Inspired by react-hot-toast library
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { useState, useEffect, type ReactNode } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: ReactNode
  variant?: "default" | "destructive"
}

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: string
  description?: string
  action?: ReactNode
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toasts: ToasterToast[] = []

type Toast = Omit<ToasterToast, "id">

export const useToast = () => {
  const [, setToasts] = useState<ToasterToast[]>(toasts)

  useEffect(() => {
    const listener = () => {
      setToasts([...toasts])
    }

    window.addEventListener("toast", listener)

    return () => window.removeEventListener("toast", listener)
  }, [])

  return {
    toast: ({ ...props }: Toast) => {
      const id = genId()

      const newToast = {
        ...props,
        id,
      }

      toasts.push(newToast)
      setToasts([...toasts])

      setTimeout(() => {
        toasts.splice(
          toasts.findIndex((t) => t.id === id),
          1,
        )
        setToasts([...toasts])
      }, TOAST_REMOVE_DELAY)

      return id
    },
    dismiss: (toastId?: string) => {
      if (toastId) {
        toasts.splice(
          toasts.findIndex((t) => t.id === toastId),
          1,
        )
      } else {
        toasts.splice(0, toasts.length)
      }
      setToasts([...toasts])
    },
    toasts,
  }
}

export const toast = ({ ...props }: Toast) => {
  const id = genId()

  const newToast = {
    ...props,
    id,
  }

  toasts.push(newToast)

  const event = new CustomEvent("toast")
  window.dispatchEvent(event)

  setTimeout(() => {
    toasts.splice(
      toasts.findIndex((t) => t.id === id),
      1,
    )
    window.dispatchEvent(event)
  }, TOAST_REMOVE_DELAY)

  return id
}

export type { Toast }
