# HomeMedix Website — Image Placement Guide

Drop your images into the folders below. Each entry shows the exact filename expected, the recommended dimensions, and what it replaces on the site.

---

## 📁 Root images

| Filename | Dimensions | Used in |
|---|---|---|
| `logo.png` | 200×60 px, transparent bg | All pages — navbar & footer |
| `logo-white.png` | 200×60 px, white version | Dark navbar / footer |
| `favicon.ico` | 32×32 px | Browser tab icon |
| `og-products.jpg` | 1200×630 px | Products index social share |
| `about-og.jpg` | 1200×630 px | About page social share |

---

## 📁 assets/images/products/

### Hero images (product detail pages)
| Filename | Dimensions | Product |
|---|---|---|
| `oc-kx-hero.png` | 800×800 px, transparent bg | Oxygen Concentrator KX |
| `oc-kv-hero.png` | 800×800 px, transparent bg | Oxygen Concentrator KV |
| `hm-pro-hero.png` | 800×800 px, transparent bg | HM Pro Mesh Nebulizer |
| `hm-pro-og.jpg` | 1200×630 px | HM Pro social share |
| `mistyneb-hero.png` | 800×800 px, transparent bg | MistyNeb Nebulizer |
| `cpap-bipap-hero.png` | 800×800 px, transparent bg | CPAP / BiPAP |
| `airquilt-hero.png` | 800×800 px, transparent bg | AirQuilt Mattress |
| `aquaquilt-hero.png` | 800×800 px, transparent bg | AquaQuilt Water Bed |
| `latex-gloves-hero.png` | 800×800 px, transparent bg | Latex Gloves |

### Card thumbnails (products index + related products)
| Filename | Dimensions | Used in |
|---|---|---|
| `oc-kx-card.png` | 600×400 px | Products index card |
| `oc-kv-card.png` | 600×400 px | Products index card |
| `hm-pro-card.png` | 600×400 px | Products index card |
| `mistyneb-card.png` | 600×400 px | Products index card |
| `cpap-bipap-card.png` | 600×400 px | Products index card |
| `airquilt-card.png` | 600×400 px | Products index card |
| `aquaquilt-card.png` | 600×400 px | Products index card |
| `latex-gloves-card.png` | 600×400 px | Products index card |

### Related product thumbnails (small, shown on product pages)
| Filename | Dimensions |
|---|---|
| `oc-kx-thumb.png` | 400×240 px |
| `oc-kv-thumb.png` | 400×240 px |
| `hm-pro-thumb.png` | 400×240 px |
| `mistyneb-thumb.png` | 400×240 px |
| `cpap-bipap-thumb.png` | 400×240 px |
| `airquilt-thumb.png` | 400×240 px |
| `aquaquilt-thumb.png` | 400×240 px |

### Homepage showcase
| Filename | Dimensions | Used in |
|---|---|---|
| `hero-bg.jpg` | 1920×1080 px (optional) | Homepage hero background |

---

## 📁 assets/images/about/

| Filename | Dimensions | Used in |
|---|---|---|
| `factory-exterior.jpg` | 900×600 px | About page — story section |
| `cleanroom.jpg` | 600×400 px | About page — clean room |
| `qc-lab.jpg` | 600×400 px | About page — QC lab |
| `warehouse.jpg` | 600×400 px | About page — warehouse |

---

## 📁 assets/images/certs/

| Filename | Dimensions | Used in |
|---|---|---|
| `iso-13485-badge.png` | 200×200 px | About page, cert strip |
| `iso-9001-badge.png` | 200×200 px | About page |
| `cdsco-badge.png` | 200×200 px | About page |
| `ce-badge.png` | 200×200 px | About page |

---

## 📁 assets/images/team/

| Filename | Dimensions | Used in |
|---|---|---|
| `sukumar-shetty.jpg` | 400×400 px, professional headshot | About page — leadership |

---

## How to swap a placeholder

Every placeholder `<div>` in the HTML has an HTML comment directly above it like:

```html
<!-- Replace with: assets/images/products/oc-kx-hero.png (800×800px, transparent bg) -->
<div class="product-image-placeholder">...</div>
```

To replace it, delete the `<div class="product-image-placeholder">...</div>` block and replace with:

```html
<img src="../assets/images/products/oc-kx-hero.png" alt="HomeMedix Oxygen Concentrator KX" loading="lazy" />
```

Use `../assets/` for pages inside the `/products/` folder, and `assets/` for root-level pages.

---

## Image tips

- **Format**: Use `.webp` for best performance (with `.png`/`.jpg` fallback), or `.jpg` for photos, `.png` for product cutouts with transparent backgrounds.
- **Compression**: Run through [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/) before uploading.
- **Alt text**: Already written in the HTML. Update if your image differs from the description.
