# Project Blueprint

## Overview

This project is a website for Helix, a company that provides a serverless PostgreSQL database designed for modern development workflows. The website showcases the product's features, use cases, and company information.

## Core Features

*   **Autoscaling:** Automatically scales compute resources based on demand.
*   **Database Branches:** Allows for the creation of isolated database copies for development and testing.
*   **Zero-Downtime Deployments:** Enables seamless application updates without service interruptions.
*   **Global Regions:** Deploy databases in over 20 global regions for low latency.
*   **DDoS Protection:** Advanced protection against DDoS attacks.
*   **Content Caching:** Caches static assets at the edge for faster load times.
*   **SSL/TLS Certificates:** Automatic provisioning and renewal of SSL certificates.
*   **Load Balancing:** Distributes traffic intelligently as applications scale.

## Website Sections

*   **Navbar:** Main navigation menu.
*   **Hero Section:** Main headline and call-to-action.
*   **About Section:** Explains how Helix simplifies database management.
*   **Features Section:** Highlights security and speed.
*   **FAQ Section:** Answers to frequently asked questions.
*   **Footer Section:** Links to various resources.
*   **Docs Section:** A comprehensive documentation portal.

## Design and Styling

*   **Framework:** Next.js with TypeScript.
*   **Styling:** Tailwind CSS for utility-first styling.
*   **UI Components:** A rich set of reusable UI components is available in the `components/ui` directory.
*   **Docs Theme:** The documentation section will use a modern, dark theme inspired by the Neon documentation.

## Current Plan: Redesign Docs Page

*   **Objective:** Overhaul the design of the documentation section to match a new, modern, developer-centric aesthetic.
*   **Inspiration:** `https://neon.tech/docs`
*   **Steps:**
    1.  **Implement Dark Theme:** Apply a dark background and light text styling across the documentation pages.
    2.  **Create a Docs Sub-Navbar:** Build a secondary navigation bar below the main header for docs-specific categories (e.g., "Get started", "About", "Connect").
    3.  **Revamp Docs Landing Page (`/docs`):**
        *   Create a "Quickstart prompts" section with a grid of popular technologies (Next.js, Django, etc.).
        *   Create an "Explore the docs" section with interactive cards linking to major documentation areas.
    4.  **Update Docs Layout:** Modify the layout to a three-column structure: a collapsible left sidebar for navigation, a central content area, and a right-hand panel for contextual links and actions.
    5.  **Refine Sidebar Navigation:** Update the left sidebar's structure and content to improve discoverability.
    6.  **Create Right-Hand Contextual Panel:** Implement the right-side panel to display relevant links and actions.
