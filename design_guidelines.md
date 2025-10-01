# Design Guidelines - Portal de Apoio ao Condômino

## Design Approach
**System-Based Approach**: Material Design principles for information-dense applications
**Justification**: This condo support portal prioritizes quick information access, clear hierarchy, and intuitive navigation over visual creativity. Residents need efficiency and clarity when seeking answers.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 220 85% 45% (Professional blue - trust and authority)
- Primary Hover: 220 85% 38%
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 45%
- Border: 220 15% 88%
- Success (confirmations): 145 65% 45%
- Warning (important notices): 35 90% 55%

**Dark Mode:**
- Primary: 220 75% 55%
- Primary Hover: 220 75% 62%
- Background: 220 18% 12%
- Surface: 220 16% 16%
- Text Primary: 220 10% 95%
- Text Secondary: 220 8% 70%
- Border: 220 12% 25%

### B. Typography
- **Primary Font**: Inter (Google Fonts) - excellent readability for instructions
- **Headings**: Font weights 600-700, sizes from text-2xl to text-4xl
- **Body**: Font weight 400, text-base (16px) for optimal reading
- **Small text**: text-sm for metadata, timestamps
- **Line height**: leading-relaxed (1.625) for body text

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Tight spacing: p-2, gap-2 (within cards)
- Standard spacing: p-4, p-6, gap-4 (between elements)
- Section spacing: py-12, py-16, py-20 (vertical rhythm)
- Container: max-w-6xl mx-auto for main content

### D. Component Library

**Navigation**
- Sticky header with search bar prominently placed
- Category pills/tabs for quick filtering
- Breadcrumbs for deeper navigation paths

**Search Component**
- Large, prominent search bar in header
- Autocomplete suggestions as user types
- Search results with highlighted keywords

**Content Cards**
- Elevated cards (shadow-md) with hover states
- Icon + Title + Brief description pattern
- Clear "Read More" affordance with arrow icon

**Category System**
- Icon-based category cards in grid (2 columns mobile, 4 desktop)
- Categories: Reservas, Manutenção, Regras, Áreas Comuns, Pagamentos, Contatos
- Use Heroicons for category icons

**FAQ/Instruction Pages**
- Step-by-step numbered instructions with clear visual hierarchy
- Expandable accordion for related questions
- "Was this helpful?" feedback at bottom
- Tags for cross-referencing related topics

**Data Display**
- Info boxes for important notices (border-l-4 with warning color)
- Tables for fee structures, schedules
- Badges for status indicators (active, pending, etc.)

### E. Images
**Hero Section**: Clean, professional image of condo common area or building facade (1200x500px approx)
- Subtle gradient overlay for text readability
- Centered heading: "Central de Ajuda - [Nome do Condomínio]"
- Subheading explaining purpose
- Prominent search bar overlaying hero

**Category Icons**: Use Heroicons CDN for all category representations
- No custom SVG generation needed
- Consistent 24px size for category cards

## Page Structure

**Home Page**
1. Hero with search (60vh)
2. Quick access category grid (grid-cols-2 md:grid-cols-4, gap-4)
3. Featured/Most Asked questions section
4. Recent updates feed
5. Emergency contacts card (always visible)

**Detail Pages**
1. Breadcrumb navigation
2. Article title + category badge
3. Step-by-step instructions with visual hierarchy
4. Related articles sidebar
5. Feedback section

**Mobile Optimization**
- Bottom navigation bar for key categories
- Collapsible search
- Single column layouts
- Touch-friendly 44px minimum tap targets

## Accessibility
- Consistent dark mode across all inputs and surfaces
- WCAG AA contrast ratios minimum
- Keyboard navigation support
- Screen reader friendly headings hierarchy
- Focus indicators on all interactive elements