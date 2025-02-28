# Search Router

## Overview

Search Router is a lightweight web application that provides a faster alternative to DuckDuckGo's bang redirects. It allows users to quickly redirect their searches to various platforms using bang commands.

## Features

- Instant search redirects using DuckDuckGo-style bang commands
- Supports all DuckDuckGo bang shortcuts
- Customizable default search engine
- Simple, minimalist user interface

## Installation

### Prerequisites

- Node.js (version 18 or later)
- pnpm

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/astro-search-router.git
   cd astro-search-router
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Usage

### Development

Run the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Building

To create a production build:

```bash
pnpm build
```

### Preview

To preview the production build:

```bash
pnpm preview
```

## How to Use

1. Open the application
2. Start typing your search query
3. Prefix your query with a bang command (e.g., `!g` for Google, `!gh` for GitHub)
4. Press Enter to be redirected to the corresponding search results

### Example Bang Commands

- `!g`: Google Search
- `!gh`: GitHub Search
- `!yt`: YouTube Search
- `!w`: Wikipedia Search

For a full list of supported bang commands, visit [DuckDuckGo Bang Documentation](https://duckduckgo.com/bang.html)

## Configuration

You can set a default search engine by modifying the `localStorage` key `default-bang`.

## Technologies

- Astro
- TypeScript
- Vite PWA
- pnpm

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
