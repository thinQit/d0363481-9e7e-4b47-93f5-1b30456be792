"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Accordion = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>{children}</div>
));
Accordion.displayName = "Accordion";

export const AccordionContent = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>{children}</div>
));
AccordionContent.displayName = "AccordionContent";

export const AccordionItem = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>{children}</div>
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>{children}</div>
));
AccordionTrigger.displayName = "AccordionTrigger";

