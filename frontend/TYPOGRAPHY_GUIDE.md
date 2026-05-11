# Poppins Typography System Guide

This document defines the dual-scale typography system for the Latrics project, ensuring optimal readability and visual impact across all devices.

## Responsive Strategy: Fluid Typography
The system uses **CSS `clamp()`** to create a seamless transition between mobile and desktop displays. This eliminates the need for manual breakpoints and allows text to scale proportionally with the viewport width.

- **Formula**: `clamp(MOBILE_SIZE, FLUID_VALUE, DESKTOP_SIZE)`
- **Mobile Target**: 360px - 480px viewport.
- **Desktop Target**: 1200px+ viewport.

---

## 1. Mobile Typography Scale (< 480px)
Optimized for smaller screens, focusing on clarity and vertical rhythm.

| Category | Style Name | Font Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | Display XL | 2.5rem | 800 | 1.05 | -0.02em |
| **Display** | Display L | 2.0rem | 700 | 1.1 | -0.015em |
| **Headings** | H1 | 1.75rem | 700 | 1.15 | -0.01em |
| **Headings** | H2 | 1.375rem | 600 | 1.2 | 0 |
| **Headings** | H3 | 1.125rem | 600 | 1.25 | 0 |
| **Headings** | H4 | 1.0rem | 600 | 1.3 | 0 |
| **Body** | Body L | 1.125rem | 400 | 1.8 | 0 |
| **Body** | Body M | 1.0rem | 400 | 1.75 | 0 |
| **UI** | Lead | 1.125rem | 400 | 1.6 | 0 |

---

## 2. Desktop Typography Scale (> 1200px)
Optimized for large displays, emphasizing impact and hierarchy.

| Category | Style Name | Font Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | Display XL | 4.5rem | 800 | 1.05 | -0.02em |
| **Display** | Display L | 3.5rem | 700 | 1.1 | -0.015em |
| **Headings** | H1 | 2.75rem | 700 | 1.15 | -0.01em |
| **Headings** | H2 | 2.125rem | 600 | 1.2 | 0 |
| **Headings** | H3 | 1.625rem | 600 | 1.25 | 0 |
| **Headings** | H4 | 1.25rem | 600 | 1.3 | 0 |
| **Body** | Body L | 1.125rem | 400 | 1.8 | 0 |
| **Body** | Body M | 1.0rem | 400 | 1.75 | 0 |
| **UI** | Lead | 1.375rem | 400 | 1.6 | 0 |

---

## 3. Global Constants
These properties remain consistent across all viewport sizes.

| Property | Value | Usage |
| :--- | :--- | :--- |
| **Font Family** | Poppins | Primary Brand Typeface |
| **H5** | 1.0rem | SemiBold (600) |
| **H6** | 0.875rem | SemiBold (600), Uppercase |
| **Label** | 0.9375rem | Medium (500) |
| **Caption** | 0.75rem | Regular (400) |
| **Overline** | 0.6875rem | SemiBold (600), Uppercase |
