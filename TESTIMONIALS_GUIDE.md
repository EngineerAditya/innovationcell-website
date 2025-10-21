# Managing Testimonials

All testimonials are stored in one central location: `src/data/testimonials.ts`

## 📝 How to Add a New Testimonial

1. Open `src/data/testimonials.ts`
2. Copy this template:

```typescript
{
  author: {
    name: "Full Name",
    role: "Position, Company Name",
    avatar: "/path/to/image.jpg", // Optional
  },
  text: "The testimonial text goes here.",
  href: "https://linkedin.com/in/profile", // Optional
},
```

3. Paste it into the `testimonialsData` array
4. Fill in the details
5. Save the file - that's it! ✅

## ✏️ How to Edit a Testimonial

1. Open `src/data/testimonials.ts`
2. Find the testimonial you want to edit
3. Change the text, name, or role
4. Save the file

## 🗑️ How to Remove a Testimonial

1. Open `src/data/testimonials.ts`
2. Find the testimonial you want to remove
3. Delete the entire object (including the comma)
4. Save the file

## 🎨 Adding Profile Pictures

1. Add the image to `/public/images/testimonials/`
2. Reference it in the testimonial:
   ```typescript
   avatar: "/images/testimonials/person-name.jpg"
   ```
3. If no avatar is provided, the first letter of the name will be shown

## 🔗 Adding Links

To make a testimonial card clickable (e.g., link to LinkedIn):

```typescript
{
  author: { ... },
  text: "...",
  href: "https://linkedin.com/in/username"
}
```

## 🎬 Animation Speed

The testimonials scroll continuously at 40 seconds per loop.

To change the speed, edit `src/components/TestimonialsSection.tsx`:
- Find `[--duration:40s]`
- Change `40s` to your desired duration (smaller = faster)

## 💡 Tips

- Keep testimonial text concise (2-3 sentences max)
- Use real names and companies for authenticity
- The marquee automatically duplicates testimonials for seamless scrolling
- Minimum 3 testimonials recommended for good visual effect
- Maximum 10 testimonials recommended (longer = slower scroll)

## 📄 Current Testimonials

View all current testimonials in `src/data/testimonials.ts`
