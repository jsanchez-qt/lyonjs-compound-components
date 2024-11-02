# LyonJS Compound Components

This repository contains the code for the talk "#99 Cap sur les Compound Components" given at LyonJS on 2024-11-13.

More information about the talk can be found on the [LyonJS website](https://lyonjs.org/).

## Steps

0. talk/step-0-inital-state

**Initial State for Meetups and Members**

Initial state of the application with components that are not compound but still simple because the business need is simple.

---

1. talk/step-1-new-business-need-meetups

**New Business Need for Meetups**

The business need has evolved and become more complex, now some meetups are "highlighted" and should be displayed differently:

- The highlighted meetups should be displayed first in a 2 columns layout
- The highlighted meetups should display a "party-popper" button to pop a confetti animation
- The highlighted meetups should display have a different background color "#EFD94F" (yellow) instead of #202020" (black/gray)

---

2. talk/step-2-refactor-meetups-to-cc

**Refactor Meetups to Compound Components**

With the business need for highlighted meetups, the `MeetupCard` component has become more complex and should be refactored to a compound component. In this branch we can see the result of the refactor of the `MeetupCard` component to a compound component.

---

3. talk/step-3-refactor-members-to-cc

**Refactor Members to Compound Components**

In the same way as the `MeetupCard` component, the `MemberList`, `MemberForm` and `MemberStats` components should be refactored to a compound components. In this branch we can see the result of the refactor of these components to compound components.
