# Fretful Thinking ([link](https://fretfulthinking.com/)) 🎸

For guitarist, learing the fretboard and theory behind it is one of the most difficult endeavors, but it doesn't have to be. [Fretful Thinking](https://fretfulthinking.com/) is an open source web application designed to help guitarists improve their understanding of the instrument, including:

- Mastering the notes on the fretboard with a randomized note challenge configured to your desired number of frets, number of strings, tuning for those strings, and overall time limit
- Memorizing the 5 "shapes" of the pentatonic scales to improvise all over the fretboard in various keys that you select
- Understanding barre chords and how they derive directly from the pentatonics

We welcome and—more importantly—encourage any contribution that furthers this goal.

## Getting Started 🎬

If you're not already familiar, we'd recommend first playing around with the [application](https://fretfulthinking.com/) to get a feel for how it works and what might be lacking (after all, anything that would be helpful for you would also be helpful for other guitarists).

The project is built entirely on the client side with **TypeScript** and **React** to ensure a low-latency user experience. It is also a single-page application that leverages **React Router** to store and update guitar-related state, allowing users to bookmark and/or share links to specific guitar configurations.

### Collaboration Workflow 🍴

Fretful Thinking follows a "Fork-and-Clone" collaboration workflow:

1. Fork the repository so that it is available as a personal repo
2. Use `git clone https://github.com/YOUR-USERNAME/fretful-thinking` to clone the new, personal repo to your local machine
3. Use `git remote add upstream https://github.com/e-szm/fretful-thinking.git` to link the personal repo on your local machine to the original repo
4. You can now fetch/pull changes from the original repo to keep yours up to date (e.g., `git fetch upstream main`)

### Submitting a Pull Request 🪢

Once you're ready with the changes in your personal repo, you can submit a pull request using the [template provided here](https://github.com/e-szm/fretful-thinking/tree/main/.github). Please allow some time for this to be reviewed.

## License 🪪

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/e-szm/fretful-thinking/blob/main/LICENSE) file for details.
