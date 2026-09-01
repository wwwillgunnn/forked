# Forked

> **Where food gets ranked.**

Forked is a social food discovery and ranking platform for finding the best things to eat.

Instead of simply asking:

> **"What restaurants are near me?"**

Forked asks:

> **"What's the best ramen, burger, pasta, croissant, steak, sushi, coffee, or açai bowl around here?"**

Users discover food, check in when they eat somewhere, share what they ordered, compare dishes, build ranked lists, and see what their friends and the wider community think.

Think:

**Letterboxd + Strava + Google Maps + community-voted food leaderboards.**

The long-term goal is for Forked to become the **ranking layer for food discovery** — a place where people can discover what is genuinely worth eating, wherever they are.

---

## Product

Forked is built around four core ideas:

### Discover

Find restaurants and individual food items based on:

- Location
- Cuisine
- Meal type
- Food item
- Personal preferences
- Friends
- Trending activity
- Community rankings

### Rank

Forked is not just a review platform.

Users can directly compare food:

> **Which is better?**

```text
┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │
│    GUMSHARA     │ VS  │  RYO'S NOODLES  │
│                 │     │                 │
│      🍜         │     │       🍜        │
│                 │     │                 │
└─────────────────┘     └─────────────────┘
```

Users choose a winner and Forked's ranking system updates accordingly.

This creates rankings that are based on actual comparisons rather than only star ratings.

### Socialise

Food is inherently social.

Users can:

- Post where they ate
- Share photos
- Tag what they ordered
- Follow friends
- Like posts
- Comment
- See friends' activity
- Compare their rankings
- Discover places through people they trust

### Build Lists

Users can create and maintain their own food rankings.

Examples:

```text
My Best Burgers
Sydney Ramen
Cheap Eats
Date Night
Best Coffee
Places I Need To Try
Favourite Italian
```

---

# Rankings

Ranking is one of Forked's core systems.

Forked combines multiple signals to produce rankings that are useful at different geographic and social levels.

### Ranking signals

- Pairwise voting
- Community ratings
- Check-ins
- Food posts
- Friend activity
- Bayesian weighting
- Freshness / time decay
- Engagement
- Location
- Food-item specific performance

The system should prevent a restaurant with only a handful of votes from immediately overtaking an established restaurant with thousands of votes.

### Ranking outputs

```text
global_score
country_score
state_score
city_score
suburb_score
friend_score
trending_score
food_item_score
```

This allows Forked to answer questions such as:

```text
Top 100 burgers in Australia
Top 100 burgers in NSW
Top 100 burgers in Sydney
Top 100 burgers near me
Top 100 burgers among my friends
```

---

# Pairwise Voting

Forked uses an Elo-style pairwise ranking system for direct comparisons.

Example:

```text
Best ramen in Sydney?

A: Gumshara
B: Ryo's Noodles

User chooses A.

Gumshara rating increases.
Ryo's rating decreases.
```

Rather than asking users to determine whether something is a 7.3 or 8.1, Forked can ask a much simpler question:

> **Which one is better?**

Large numbers of these comparisons produce increasingly useful rankings.

---

# Social Feed

The social feed is inspired by activity-based products such as Strava.

A typical activity looks like:

```text
User ate at restaurant
        ↓
User selects food item
        ↓
User uploads photo
        ↓
Check-in / post created
        ↓
Friends see activity
        ↓
Engagement generated
        ↓
Restaurant / food ranking receives signals
```

The feed is therefore not separate from the ranking system.

**Activity contributes to the living food graph.**

---

# Recommendations

Forked can generate recommendations based on context.

Example:

> **What should I eat for dinner?**

The recommendation system considers:

```text
User location
Time of day
Friends' activity
Saved restaurants
Dietary preferences
Price range
Open now
Cuisine preferences
Personal ranking history
Trending restaurants
Distance
Weather
```

An initial rules-based recommendation score can be:

```text
score =
    ranking_score
  + friend_score
  + distance_score
  + open_now_score
  + personal_preference_score
  + trending_score
```

The recommendation system can later evolve toward embedding-based and AI-powered recommendations using vector search and an LLM.

---

# Reservations

Forked can surface reservation options without initially needing to become a reservation provider itself.

The initial approach is:

```text
Restaurant
    ↓
Reservation available
    ↓
Forked reservation button
    ↓
OpenTable / restaurant website / booking provider
```

Outbound clicks and conversions can be tracked to understand demand.

---

# Platform Architecture

Forked is a **Turborepo monorepo** built around Svelte.

The same core product is delivered across web, mobile, and desktop while sharing UI, types, validation, data models, and business logic.

```text
                    ┌─────────────────┐
                    │     Forked      │
                    │   Core Domain   │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
          Web App       Mobile App     Desktop App
          SvelteKit     SvelteKit      SvelteKit
                           │              │
                       Capacitor        Tauri
```

### Platforms

| Platform   | Technology            |
| ---------- | --------------------- |
| Web        | SvelteKit             |
| Mobile     | SvelteKit + Capacitor |
| Desktop    | SvelteKit + Tauri     |
| Admin      | SvelteKit             |
| Monorepo   | Turborepo + pnpm      |
| Language   | TypeScript            |
| Backend    | Supabase              |
| Database   | PostgreSQL            |
| Validation | Zod                   |
| Testing    | Vitest                |

---

# Repository Structure

```text
forked/
│
├── apps/
│   ├── web/
│   │   └── SvelteKit web application
│   │
│   ├── mobile/
│   │   └── SvelteKit application
│   │       └── Capacitor native shell
│   │
│   ├── desktop/
│   │   └── SvelteKit application
│   │       └── Tauri native shell
│   │
│   └── admin/
│       └── SvelteKit administration application
│
├── packages/
│   ├── ui/
│   │   └── Shared Svelte component library
│   │
│   ├── types/
│   │   └── Shared TypeScript types
│   │
│   ├── db/
│   │   └── Database types and helpers
│   │
│   ├── ranking/
│   │   └── Ranking algorithms and scoring
│   │
│   ├── validation/
│   │   └── Shared Zod schemas
│   │
│   ├── config/
│   │   └── Shared application configuration
│   │
│   ├── eslint-config/
│   │   └── Shared ESLint configuration
│   │
│   └── typescript-config/
│       └── Shared TypeScript configuration
│
├── backend/
│   └── supabase/
│       ├── migrations/
│       ├── functions/
│       └── seed/
│
├── services/
│   ├── search-indexer/
│   ├── ranking-worker/
│   ├── place-sync-worker/
│   └── recommendation-worker/
│
├── docs/
│   └── Product and technical documentation
│
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

# Svelte Turborepo Foundation

Forked is based on the official Turborepo Svelte starter architecture.

The repository uses:

- SvelteKit
- Svelte
- TypeScript
- Turborepo
- pnpm
- ESLint
- Prettier
- Vitest

The Svelte applications share reusable components and configuration through workspace packages.

The original Turborepo Svelte starter provides the foundation for the workspace, while Forked extends it with additional applications, packages, backend infrastructure, and native platform shells.

---

# Applications

## `apps/web`

The primary browser experience.

Responsibilities include:

- Restaurant discovery
- Food discovery
- Leaderboards
- Food-item pages
- Profiles
- Social feed
- Lists
- Search
- Recommendations
- Maps / location discovery

Built with **SvelteKit**.

---

## `apps/mobile`

The mobile version of Forked.

The application uses the same SvelteKit frontend architecture while being packaged as a native application using **Capacitor**.

Mobile-specific capabilities can include:

- Camera
- Photo uploads
- Location
- Push notifications
- Native sharing
- Deep links
- Haptics

The goal is to keep as much product logic and UI shared with the web application as possible.

---

## `apps/desktop`

The desktop version of Forked.

The SvelteKit application is packaged using **Tauri**, allowing Forked to provide a lightweight native desktop application while retaining the shared Svelte frontend.

Tauri is responsible for native desktop capabilities while Svelte/SvelteKit handles the application UI.

---

## `apps/admin`

Internal administration application.

Used for:

- Restaurant moderation
- Food taxonomy management
- User moderation
- Reports
- Ranking monitoring
- Data quality
- Place verification
- Content moderation
- Platform analytics

---

# Shared Packages

## `packages/ui`

Shared Svelte component library.

Contains reusable components such as:

```text
Button
Card
Modal
Avatar
RestaurantCard
FoodCard
Leaderboard
Rating
VoteButton
FeedPost
List
Search
Map
```

The package allows the web, mobile, desktop, and admin applications to share the same design system.

---

## `packages/types`

Shared TypeScript domain types.

Examples:

```text
User
Profile
Restaurant
RestaurantLocation
FoodItem
Cuisine
Post
CheckIn
Vote
Rating
Leaderboard
List
Recommendation
```

---

## `packages/db`

Database types and helpers generated from the Supabase schema.

This provides a consistent database contract across applications and services.

---

## `packages/ranking`

The shared ranking domain.

Contains algorithms for:

- Elo-style pairwise ranking
- Bayesian scoring
- Ranking aggregation
- Freshness decay
- Friend weighting
- Trending scores
- Geographic ranking

Keeping ranking logic in its own package allows it to be tested independently and reused by workers and applications.

---

## `packages/validation`

Shared Zod schemas for validating:

- API inputs
- Forms
- Posts
- Votes
- Restaurant data
- Food items
- User-generated content

---

# Backend

Forked uses Supabase and PostgreSQL as the primary backend foundation.

```text
backend/
└── supabase/
    ├── migrations/
    ├── functions/
    └── seed/
```

Core database entities include:

```text
users
profiles
follows

countries
states
cities
suburbs

restaurants
restaurant_locations
restaurant_hours
restaurant_photos

food_items
restaurant_food_items
cuisines
tags

check_ins
posts
post_photos
comments
likes

votes
pairwise_votes
ratings
reviews

rankings
leaderboards
saved_lists

reservations
reservation_links

recommendation_events
moderation_queue
```

---

# Background Services

Some workloads should run asynchronously rather than inside the user-facing applications.

```text
services/
├── search-indexer/
├── ranking-worker/
├── place-sync-worker/
└── recommendation-worker/
```

### Search Indexer

Keeps restaurant and food search indexes up to date.

### Ranking Worker

Processes votes, ratings, activity, freshness, and other ranking signals.

Leaderboards are **precomputed** rather than recalculated from scratch on every request.

### Place Sync Worker

Synchronises restaurant and location information from external data providers.

### Recommendation Worker

Generates and updates recommendation candidates and recommendation signals.

---

# Leaderboards

Forked precomputes frequently requested rankings.

Examples:

```text
top_restaurants_by_city
top_food_items_by_city
top_breakfast_spots
top_lunch_spots
top_dinner_spots
top_friend_recommendations
top_trending_this_week
```

This allows ranking pages to remain fast even as the amount of voting and activity grows.

---

# MVP

The initial product focuses on the core discovery and ranking loop.

```text
1. User authentication
2. City-based restaurant discovery
3. Food-item pages
4. Pairwise voting
5. Top 100 lists by city
6. Friend feed
7. Save places
8. Post where you ate
9. Search by food item
10. Reservation / booking deep links
```

The most important foundations underneath the MVP are:

```text
Ranking quality
Location hierarchy
Food-item taxonomy
Spam prevention
Social graph
Data freshness
Restaurant coverage
```

---

# Development

Install dependencies:

```sh
pnpm install
```

Run the development environment:

```sh
pnpm dev
```

Build all applications and packages:

```sh
pnpm exec turbo run build
```

Run type checking:

```sh
pnpm exec turbo run check-types
```

Run linting:

```sh
pnpm exec turbo run lint
```

Run tests:

```sh
pnpm exec turbo run test:unit
```

Run the complete verification pipeline:

```sh
pnpm exec turbo run build check-types lint test:unit
```

---

# Turbo Tasks

The repository provides the following core tasks:

### `build`

Build applications and packages.

### `check-types`

Run TypeScript checks across applications and packages.

Depends on:

```text
build
```

### `lint`

Run ESLint across the workspace.

### `test:unit`

Run unit and component tests using Vitest.

Depends on:

```text
build
```

Turborepo handles task orchestration and caching across the monorepo.

---

# Tooling

Forked uses:

- **Turborepo** — monorepo orchestration
- **pnpm** — package management
- **SvelteKit** — application framework
- **Svelte** — UI framework
- **TypeScript** — type safety
- **Supabase** — backend platform
- **PostgreSQL** — relational database
- **Capacitor** — native mobile applications
- **Tauri** — native desktop applications
- **Zod** — runtime validation
- **ESLint** — linting
- **Prettier** — formatting
- **Vitest** — testing

---

# Design Direction

Forked should feel like a **food culture platform**, rather than a traditional restaurant booking or delivery application.

The visual identity is warm, editorial, social, and slightly playful.

The initial colour direction is:

```text
Warm Cream       #F6F0E5
Charcoal         #1D1C1A
Tomato Red       #D94336
Deep Burgundy    #7D2635
Butter Yellow    #F2C75C
Sage             #8FA58B
```

The primary visual language should centre around:

**Cream + Charcoal + Tomato/Burgundy**

with the supporting colours used for states, categories, rankings, and highlights.

---

# Vision

Forked is ultimately intended to become more than a restaurant directory.

The goal is to build a living, community-powered **food ranking graph**.

Every:

- restaurant
- dish
- vote
- check-in
- photo
- list
- friendship
- recommendation
- comparison

contributes to a continuously evolving picture of what people actually think is worth eating.

> **Fork. Eat. Rank.**
