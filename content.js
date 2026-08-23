/* =============================================================================
 *  WEDDING SITE CONTENT  —  EDIT THIS FILE TO UPDATE THE WEBSITE
 * =============================================================================
 *
 *  This is the ONLY file you need to edit to change the words, dates, venues,
 *  FAQs, and photos on the site. You don't need to touch the HTML or CSS.
 *
 *  Rules of thumb:
 *   - Keep the quotes "" around any text.
 *   - Every line inside { } or [ ] ends with a comma.
 *   - To add a photo, drop the image in the /images folder and add a line to
 *     the GALLERY list below.
 *   - To add an FAQ, copy an existing { q: "...", a: "..." } line.
 *
 *  After editing, just save the file and refresh the page in your browser.
 * ========================================================================== */


/* ---------------------------------------------------------------------------
 *  1) THE BASICS + THE TWO CELEBRATIONS
 * ------------------------------------------------------------------------- */
const WEDDING = {
  // Shown in the header / hero of the main page.
  coupleNames: "Nikita & Connor",

  // Big full-screen photo behind the names at the top of the main page.
  // Landscape (wide) photos work best here.
  heroImage: "images/laughing.jpg",

  // A short welcome paragraph at the top of the main page.
  intro:
    "We're getting married, and we're excited to share our special day(s) " +
    "with you! We wanted to make sure to get as much attention as possible, " +
    "so we're going to have two weddings: one in New Delhi, and one in New " +
    "Hampshire. We would love to have you at one or both of the weddings, " +
    "but we know at least one of these would be long trip for everyone, so " +
    "please don't feel any pressure to come to both. (We want you to feel a " +
    "little pressure to come to at least one.)",

  // ---- Celebration #1: New Delhi ----------------------------------------
  newDelhi: {
    title: "New Delhi",
    image: "images/ashok-hotel.jpg",   // photo shown beside this celebration
    date: "March 13 & 14, 2027",    // e.g. "January 2027"
    location: "Chanakyapuri, New Delhi, India",   // city / region
    venue: "The Ashok Hotel",       // venue name, if known
    // Google Maps link for the venue (shown as "View on map"). Leave "" to hide.
    mapUrl: "https://maps.app.goo.gl/MkHzx9MRJFVE2McdA",
    // The main paragraph describing this celebration. Write as much as you like.
    description:
      "We'll start our celebration with three events over two days at The Ashok, " +
      "a historic New Delhi hotel.",
    // Optional extra notes — add or remove lines freely. Leave the list empty
    // (details: []) to hide this part entirely.
    details: [
      { label: "Travel", value: "Nearest airport: Indira Gandhi International (DEL), about 20 minutes away." },
    ],
  },

  // ---- Celebration #2: New Hampshire ------------------------------------
  newHampshire: {
    title: "New Hampshire",
    image: "images/ragged.webp",    // photo shown beside this celebration
    date: "June 19, 2027",
    location: "Danbury, New Hampshire, USA",
    venue: "Ragged Mountain Resort",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ragged+Mountain+Resort+620+Ragged+Mountain+Rd+Danbury+NH+03230",
    description:
      "We'll gather again on June 19th, 2027 at Ragged Mountain Resort in " +
      "Danbury, New Hampshire — a mountain setting in the heart of the " +
      "state for our New England celebration.",
    details: [
      { label: "Travel", value: "Nearest major airports: Manchester–Boston (MHT) and Boston Logan (BOS)." },
    ],
  },
};


/* ---------------------------------------------------------------------------
 *  2) FREQUENTLY ASKED QUESTIONS  (split by celebration)
 *
 *  Copy a { q: "...", a: "..." } line to add a question. Delete a line to
 *  remove one. Order top-to-bottom is the order shown on the page.
 *
 *  An answer ("a") can be plain text in quotes, OR — if you want bullet
 *  points — an object with an optional lead-in line and a list of bullets:
 *
 *      a: {
 *        text: "Here's what to expect:",   // optional intro line
 *        bullets: [
 *          "First thing",
 *          "Second thing",
 *        ],
 *      },
 *
 *  To add a clickable link in any answer or bullet, write [label](url):
 *      "See the ([rental list](images/Ragged%20Mountain%20Airbnbs.pdf))."
 *  (Spaces in a file name must be written as %20, as shown above.)
 * ------------------------------------------------------------------------- */
const FAQS_NEW_DELHI = [
  {
    q: "I've never been to an indian wedding, what should I expect?",
    a: {
      text: "The wedding will consist of three events over two days:",
      bullets: [
        "Sangeet (March 13): This is a super fun event with lots and lots of " +
        "dancing!",
        "Haldi (March 14): Haldi means 'turmeric', and this is a ceremony where " +
        "the bride and groom get covered with a turmeric-based paste.",
        "Wedding (March 14): This event will include (of course) lots of " +
        "eating and drinking, as well as the actual wedding ceremony!",
      ],
    },
  },
  {
    q: "How do I RSVP?",
    a: "No need to RSVP yet, we'll send out invitations soon!",
  },
  {
    q: "What should I wear?",
    a: "A kurta, suit, sari or lehenga would all work for all three ceremonies! " +
       "It's typical to wear something yellow/orange at the Haldi. " +
       "Please reach out to us if you want help buying/renting a kurta, lehenga, or sari!",
  },
  {
    q: "Where should I stay?",
    a: "We'll provide rooms at or near the Ashok on March 13th and 14th, and " +
    "if you want to stay longer reach out to us for suggestions of areas to check out!",
  },
];

const FAQS_NEW_HAMPSHIRE = [
  {
    q: "I've never been to an American wedding before, what should I expect?",
    a: "The wedding itself is a one-day event that starts with the wedding ceremony, " +
    "and then turns into a big party with lots of eating, drinking and dancing! " +
    "Since people will come from out of town, we'll work on organizing some less formal events " +
    "the day before and the day after.",
  },
  {
    q: "How do I RSVP?",
    a: "No need to RSVP yet, we'll send out invitations soon!",
  },
  {
    q: "What should I wear?",
    a: "You should wear whatever you feel comfortable in! Basketball shorts " +
    "might be too informal and a tux might be too formal, but anything in between " +
    "is great!",
  },
  {
    q: "Where should I stay?",
    a: {
      text: "There aren't many hotels in the area, but there are a lot of " +
            "options for short-term rentals",
      bullets: [
        "On-site condos: There are several condos right next to the venue available " +
        "for rent that sleep 7-14 people, and come out to roughly $100 per person per night. If you're " +
        "interested in renting one of these, please reach out to us so we can coordinate with the venue.",
        "Airbnb + VRBO: We'll have a shuttle to take people home after the wedding, and the shuttle can " +
        "make stops at any of these listed rentals ([download PDF](images/Ragged%20Mountain%20Airbnbs.pdf)).",
      ],
    },
  }
];


/* ---------------------------------------------------------------------------
 *  3) PHOTO GALLERY
 *
 *  Add a photo: put the file in the /images folder, then add a line here.
 *  "src" is the path to the image, "alt" is a short description.
 * ------------------------------------------------------------------------- */
const GALLERY = [
  { src: "images/before_kiss.jpg",     alt: "Before the kiss" },
  { src: "images/kiss.jpg",            alt: "The kiss" },
  { src: "images/black_and_white.jpg", alt: "Black and white portrait" },
  { src: "images/down_beach.jpg",      alt: "Walking down the beach" },
  { src: "images/eyes_closed.jpg",     alt: "Eyes closed, foreheads together" },
  { src: "images/laughing.jpg",        alt: "Laughing together" },
  { src: "images/ring.jpg",            alt: "The ring" },
  { src: "images/ring_on_finger.jpg",  alt: "The ring on her finger" },
  { src: "images/shoulder.jpg",        alt: "Head on his shoulder" },
  { src: "images/turning.jpg",         alt: "Turning to each other" },
];
