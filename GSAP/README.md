**GSAP Learning Journey 🚀**
============================

A comprehensive collection of projects and exercises to master **GreenSock Animation Platform (GSAP)**.

## 📁 Project Structure

### 001 - Tweening Basics

**Fundamentals of GSAP Tweening Methods**

#### Concepts Learned

- `gsap.to()` – Animate elements **to** target values
- `gsap.from()` – Animate elements **from** specified starting values
- `gsap.fromTo()` – Animate elements with explicit starting **and** ending values

#### Key Takeaways

- Understanding basic animation syntax and parameters
- Working with CSS properties and transforms
- Simple animation sequencing

#### Project

**001-Project** – A complete implementation demonstrating multiple tweening techniques.

### 002 - Timeline Mastery

**Advanced Animation Sequencing with GSAP Timelines**

#### Concepts Learned

- Creating and configuring timelines
- Timeline controls: `play`, `pause`, `resume`, `reverse`, `restart`
- Position parameters for precise animation timing
- Timeline configuration options: `yoyo`, `repeat`

#### Code Example

```javascript
let tl = gsap.timeline({ yoyo: true, repeat: 4 });
tl.to(".box", { x: 500, rotation: 360, duration: 2 }, "duo")
    .to(".circle", { x: 500, rotation: 360, duration: 2 }, "duo")
    .to(".box2", { x: 500, rotation: 360, duration: 2 }, "-=1");
```

#### Project

**002-Project** – Interactive timeline controller with full playback controls.

#### Features

- Play / Pause / Resume controls
- Reverse animation playback
- Restart animation
- Advanced easing effects
- Offset timing using GSAP position parameters

#### Interactive Timeline Example

```javascript
const gtl = gsap.timeline({ paused: true, yoyo: true });
gtl.to(".box", { x: 800, duration: 2.5, ease: "back.inOut(1.7)", rotation: 360 })
    .to(".circle", { x: 900, duration: 2.5, ease: "back.inOut(1.7)", rotation: 360 }, "-=1")
    .to(".box2", { x: 1000, duration: 2.5, ease: "back.inOut(1.7)", rotation: 360 }, "-=1");

play.addEventListener("click", () => gtl.play());
pause.addEventListener("click", () => gtl.pause());
resume.addEventListener("click", () => gtl.resume());
reverse.addEventListener("click", () => gtl.reverse());
restart.addEventListener("click", () => gtl.restart());
```

## 🛠 Skills Developed

- **Animation Fundamentals:** Understanding core GSAP methods & syntax
- **Sequencing:** Building complex animation sequences using timelines
- **Interactive Controls:** Creating UI-controlled animations
- **Timing & Easing:** Working with advanced easings and position parameters
- **Project Organization:** Structuring clean, scalable animation code
 - **Project Organization:** Structuring clean, scalable animation code

### 003 - Staggering

**Stagger with a small project**

#### Concepts Learned

- `stagger` – start multiple tweens with small offsets to create cascading animations
- Targeting groups of elements and controlling delays per item (number, function, or object)
- Combining `stagger` with easing for more organic motion

#### Code Example

```javascript
gsap.to('.dot', { y: -100, duration: 1, stagger: 0.15, ease: 'power2.out' });
```

#### Project

**003 & Project** – A small demo that animates a set of elements (e.g., `.dot`) using `stagger` to create a ripple/cascade effect.

This exercise demonstrates how `stagger` simplifies sequencing many similar tweens and makes group animations feel more natural.

## 🚀 Getting Started

Each folder contains fully standalone projects. Simply open the **HTML files** in a browser to view the animations.

## 📚 Learning Path

1. Start with **001 – Tweening Basics** to learn core animation concepts
2. Move to **002 – Timeline Mastery** for advanced sequencing and interactive controls
3. Continue with upcoming advanced GSAP topics in future chapters

