// Pure TypeScript — no Cloudflare-specific imports.
// Deterministic fallback library. Served when two OpenAI attempts both fail quality validation.
// Every entry must pass qualityCheck() from quality-validator.ts.

import type { DoorwayApiResponse } from './schema'

export const FALLBACK_GENERAL: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'Your ordinary days hold more than you are catching right now.',
  opening:
    'Whatever brought you here, something in your week is still worth keeping track of. MyHGY is built for exactly that — helping you notice what is real in your days before the harder parts crowd everything else out.',
  mechanism:
    'Right now, attention naturally goes to what is difficult. MyHGY works by pulling it back to the specific good things that happened today and are already fading. Writing each one down immediately, while it is still alive, is what makes this work. This is about building an accurate record of what your days actually contain — days that are still worth tracking.',
  moments: [
    {
      title: 'Something handled',
      example:
        'You completed a task, made a decision, or moved something forward today. It does not have to be large. Write it down before the evening fills the space.',
      meaning: 'This is evidence that you are still capable of action — a fact worth having on paper.',
    },
    {
      title: 'Something connected',
      example:
        'A real conversation, a moment with someone you care about, or a small exchange that felt genuine. Write down what happened and how it landed.',
      meaning: 'This proves your days still contain the people and connections that matter.',
    },
    {
      title: 'Something noticed',
      example:
        'A detail, a change around you, something you would normally walk past. Write it down before the day moves on.',
      meaning: 'Noticing is still happening. That is where the practice starts and where it builds from.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and do this every day. Reviewing later is optional — capturing is what counts.',
  continuationBridge: 'Keep going with MyHGY — the practice builds from here.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_ADD_ADHD: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'Your days have real material in them — here is where to look.',
  opening:
    'ADD and ADHD mean your attention moves fast and the day can feel like a series of interruptions. MyHGY works inside that reality. Three moments, written when they happen. That is the whole practice.',
  mechanism:
    'When attention is constantly pulled in different directions, the good things in your day disappear fast. You notice something — a task you finished, someone responding well to you, a moment that felt right — and then the next thing arrives. Writing it down immediately, while it is still there, keeps it. Three moments per day, written when they happen, build a real record of what your days contained.',
  moments: [
    {
      title: 'A task finished',
      example:
        'You started something and got it done — or moved it forward before the pull to switch took over. Write down what it was and that it happened.',
      meaning: 'This is evidence you can complete things. That fact is worth having in writing.',
    },
    {
      title: 'A moment that landed',
      example:
        'Someone responded well to you, a conversation went somewhere real, or something caught your attention and felt worth keeping. Write it down before the next hour covers it.',
      meaning: 'Your attention finding something good shows it is still working for you, not against you.',
    },
    {
      title: 'One thing handled before it slipped',
      example:
        'A decision made, a message sent, a problem handled — before the day\'s momentum carried you somewhere else. Write it down while the specifics are still there.',
      meaning: 'These are evidence of what you are still getting done in your ordinary week.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
  continuationBridge: 'Keep going with MyHGY — each day you do it builds a clearer record.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_DIVORCE: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'There is still real life happening in your days right now.',
  opening:
    'Divorce rearranges everything. The life you planned is not the life in front of you. But the days are still here, and they still contain things worth keeping track of — even now.',
  mechanism:
    'When attention is dominated by what is ending, it is hard to see what is still present. MyHGY works by noticing the specific things your days already contain — right now, not after things settle — and writing them down before they fade. Three moments per day. Written immediately. Over time, that record shows what is still happening and where you are still capable.',
  moments: [
    {
      title: 'Something you did for yourself',
      example:
        'A meal made, a call completed, a place you went. Something that was yours to handle, and you handled it. Write it down while the day is still fresh.',
      meaning: 'This proves your capacity to take care of yourself is still operating.',
    },
    {
      title: 'A moment with someone still here',
      example:
        'A conversation with a friend or family member, a small exchange that felt genuine. Write it down and what it gave you.',
      meaning: 'Connection is still available to you. That belongs on record.',
    },
    {
      title: 'Something that was yours alone',
      example:
        'A thought that helped, a moment of clarity, something you noticed that no one else did. Write it before the weight of the situation pushes it out.',
      meaning: 'Your inner life is still active. Catching it is evidence of what is still here.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and do this every day. Later review is optional.',
  continuationBridge: 'Keep going with MyHGY — the practice holds even when life is hard.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_DRINKING: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'The days you are building now are worth tracking carefully.',
  opening:
    'Stopping drinking is one of the harder things a person does. Your days look different now. The fact that you are moving through them is itself real. MyHGY helps you notice what those days actually contain.',
  mechanism:
    'The early stretch after stopping can make ordinary days feel thin — like they should feel fuller but don\'t yet. MyHGY works by pulling attention to what is real and specific right now, not what is still missing. Three moments per day, written immediately. Over time those pages show you what your actual days are built from — the parts that are working and the ones worth continuing.',
  moments: [
    {
      title: 'A stretch handled sober',
      example:
        'You got through a part of the day — a meal, a work block, an evening — without acting on the impulse. Write down what that stretch contained and that it happened.',
      meaning: 'This is evidence that your capacity to choose is still here and working.',
    },
    {
      title: 'Something that felt real',
      example:
        'A conversation that connected, a moment with another person that was genuine, or time that felt well spent. Write it down while it is still clear.',
      meaning: 'Real moments are available to you. Capturing them is how you hold on to that.',
    },
    {
      title: 'A step taken',
      example:
        'Something you did for your own wellbeing — a walk, a call, a meeting attended, a decision made. Write it down before the next day replaces it.',
      meaning: 'These steps show the direction you are already moving.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
  continuationBridge: 'Keep going with MyHGY — the record you build here matters.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_JOB_LOSS: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'What you are doing in these days is still worth capturing.',
  opening:
    'Losing a job hits everything at once — income, routine, identity. What you do with your days right now still matters, and there is more in them than the gap makes it feel like.',
  mechanism:
    'Job loss can narrow attention to the problem and everything connected to it. MyHGY works by helping you notice what is still happening in your actual days — the specific things you did, the people you connected with, the moments that were real. Write each one down immediately. Over time those pages show what you were doing and building even during a stretch that felt like nothing.',
  moments: [
    {
      title: 'Something done today',
      example:
        'An application sent, a call made, something researched or prepared. Or something unrelated to the search — an errand handled, a meal made. Write it down before the day closes.',
      meaning: 'This shows you were active in your own life today, regardless of outcome.',
    },
    {
      title: 'A conversation that mattered',
      example:
        'An exchange with someone in your field, a friend who listened, a moment of real connection. Write down what was said and what it gave you.',
      meaning: 'Your relationships are still active. That is evidence of where you can move from here.',
    },
    {
      title: 'A moment that belonged to you',
      example:
        'Something you did just because it was yours — a walk, a book, a task completed outside the search. Write it down.',
      meaning: 'These moments show your life is not on hold. It is still happening and worth tracking.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and do this every day. Later review is optional — capturing is the practice.',
  continuationBridge: 'Keep going with MyHGY — the record builds even on hard days.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_GRIEF: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'The good things are still here, even now.',
  opening:
    'Grief is real and it takes up real space. There is nothing to fix about that. But your days still contain moments worth keeping — things that belong to you that grief does not take away.',
  mechanism:
    'When grief is present, attention can narrow to the loss and stay there. MyHGY works by noticing what is still happening alongside the grief — not instead of it, but next to it. Specific moments, written immediately. Over time those pages show that your life kept containing things worth keeping track of, even during the hardest stretch.',
  moments: [
    {
      title: 'A moment with someone still here',
      example:
        'A conversation with a person who matters to you, a small exchange that felt real, time with someone who knows you. Write down what happened and what it gave you.',
      meaning: 'Connection is still available. That is worth having on record.',
    },
    {
      title: 'Something from the day',
      example:
        'A task completed, a meal made, a place you went. Something that belonged to your ordinary day. Write it down before the evening passes.',
      meaning: 'Your capacity to move through your days is still working. That is evidence worth keeping.',
    },
    {
      title: 'A memory that came back well',
      example:
        'A moment when a good memory of the person you are grieving arose — something they said or did, a time you shared. Write it down while it is clear.',
      meaning: 'Good memories belong in the record too. Capturing them is part of how they stay.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
  continuationBridge: 'Keep going with MyHGY — the practice holds through all of it.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_OVERWEIGHT: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'Your body is doing more than you are giving it credit for.',
  opening:
    'Feeling heavy in your own body is a particular kind of hard. It can make the whole day feel like an obstacle. But your days still contain things worth noticing — moments that are not about your body at all, and ones that are.',
  mechanism:
    'When attention is fixed on what feels wrong about your body, it is hard to see what your body is still doing. MyHGY works by noticing the specific things that happened today — the movements, the choices, the moments that had nothing to do with weight — and writing them down. Three each day, written immediately. Over time that record shows what your real days were built from.',
  moments: [
    {
      title: 'Something your body did today',
      example:
        'You walked somewhere, did a task that required physical effort, or just moved through your day. Write down what you did before the evening makes it feel like nothing.',
      meaning: 'Your body is still functional and active. That is evidence worth having on record.',
    },
    {
      title: 'A choice that was yours',
      example:
        'Something you ate that felt okay, a habit you kept, a moment when you made a deliberate decision about your day. Write it down.',
      meaning: 'These small choices show you are already engaged in your own direction.',
    },
    {
      title: 'A moment with nothing to do with weight',
      example:
        'A conversation, a task completed well, something you enjoyed. Write it down while it is still here.',
      meaning: 'Your life is larger than this one thing. The record needs to show that.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
  continuationBridge: 'Keep going with MyHGY — the full record is what changes the picture.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_DEPRESSION: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'Even now, your days contain things that belong in the record.',
  opening:
    'Depression makes the day feel flat and the good things feel far away. MyHGY works alongside that — not against it. Three specific things, written when they happen. That is the whole practice.',
  mechanism:
    'When everything feels muted, the specific moments that are still real become harder to catch. MyHGY works by pulling attention to what is present — something handled, something noticed, something connected — and writing it down immediately before the weight of the day covers it. Over time those pages create a record of what actually happened in your real days, even during a stretch that did not feel like enough.',
  moments: [
    {
      title: 'One thing done',
      example:
        'Any task completed — a chore, a call made, something handled. It does not have to feel significant. Write it down before the day ends.',
      meaning: 'This is evidence that you are still moving. That belongs in writing.',
    },
    {
      title: 'One moment with another person',
      example:
        'A brief conversation, an exchange that felt real even if small, contact with someone you trust. Write down what happened.',
      meaning: 'Connection reaching you on a hard day proves it is still available to you.',
    },
    {
      title: 'One thing that was okay',
      example:
        'A moment when the day lifted slightly — something tasted good, something caught your eye, something landed differently than expected. Write it down.',
      meaning: 'These moments are evidence your capacity to notice good things is still operating.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
  continuationBridge: 'Keep going with MyHGY — even a thin day leaves something worth keeping.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_BEHIND: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'You are further along than the feeling of being behind shows.',
  opening:
    'Feeling behind is its own kind of pressure — the sense that the right version of your life is somewhere else and you haven\'t caught up. MyHGY works with what is actually here: your real days, your real progress, what you are actually doing.',
  mechanism:
    'Attention fixated on the gap tends to miss everything happening in the present. MyHGY works by pulling attention to the specific good things in your actual days right now — the things you completed, the moments that were real, the evidence that things are already moving. Writing each one down immediately creates a record that shows you what your days actually contained.',
  moments: [
    {
      title: 'Something completed',
      example:
        'A task finished, a thing delivered, a decision made. Any progress, large or small. Write down what it was and that it is done.',
      meaning: 'Completion is evidence of movement. It belongs in the record.',
    },
    {
      title: 'Something learned or figured out',
      example:
        'A problem you worked through, something you understood better by the end of the day, a skill applied. Write it down before the next thing replaces it.',
      meaning: 'This shows where your capability is already operating.',
    },
    {
      title: 'A moment that felt like progress',
      example:
        'Any exchange, decision, or action that moved something forward — even slightly. Write it down while you still have the specifics.',
      meaning: 'Progress is happening in your ordinary days. Capturing it makes it visible.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Later review is optional — capturing is what counts.',
  continuationBridge: 'Keep going with MyHGY — the record changes what you see.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_GAMBLING: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'The days when you choose differently are worth keeping track of.',
  opening:
    'Compulsive gambling takes up real space. MyHGY works alongside — not instead of — any professional help or program you are using. Its job here is specific: help you notice the real things in your days that gambling has not taken away.',
  mechanism:
    'When the impulse is strong, it is hard to see what is still intact. MyHGY works by pulling attention to the specific things your actual days contain — moments of choice, connection, and capability. Writing each one down immediately creates a record of what is still here. Over days and weeks, that record becomes visible evidence of what you are building when you choose not to act on the impulse.',
  moments: [
    {
      title: 'A stretch when you did not act on it',
      example:
        'You went through a stretch — an hour, a morning, a full day — without acting on the impulse to gamble. Write down that it happened and what you did instead.',
      meaning: 'This is direct evidence of the capacity you are building.',
    },
    {
      title: 'A responsible decision made',
      example:
        'A financial choice you made deliberately, a bill paid, a resource reached for, a call to a support contact. Write it down.',
      meaning: 'This proves the direction you are already moving.',
    },
    {
      title: 'Something from real life',
      example:
        'Time with a person who matters, a task completed, something enjoyed without acting on the impulse. Write it down while the day is still fresh.',
      meaning: 'These are the parts of your life gambling has not claimed. Capturing them matters.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
  continuationBridge: 'Keep going with MyHGY — each day you do it builds the record.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_PROCRASTINATION: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'The things you do move forward — the record needs to show that.',
  opening:
    'Chronic avoidance can make every day feel like you are behind before it starts. MyHGY works inside that — not by fixing the pattern but by building a real record of what your days contain when you do move forward.',
  mechanism:
    'When procrastination is the pattern, the moments when you do act tend to disappear quickly. Something started, something finished, something handled — and then the next pull arrives. Writing each forward movement down immediately, while it is still here, is what makes the record work. Over time those pages show what you were actually doing in your ordinary week.',
  moments: [
    {
      title: 'Something started',
      example:
        'A task you began instead of putting off — even for a few minutes. You moved toward it. Write down what it was and that you started it.',
      meaning: 'Starting is evidence of agency. That fact belongs in writing.',
    },
    {
      title: 'A decision made',
      example:
        'A choice made without deferring — an email sent, a response given, a direction chosen. Write it down before the day\'s next pull takes it.',
      meaning: 'Each decision shows you can act on things without waiting.',
    },
    {
      title: 'Something finished',
      example:
        'A task completed before the pressure built to its peak, or returned to and closed out. Write it down while you still have the specifics.',
      meaning: 'Finishing is evidence of follow-through. It belongs in the daily record.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Later review is optional — capturing is what counts.',
  continuationBridge: 'Keep going with MyHGY — the record of what you do changes what you believe you can do.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_PORNOGRAPHY: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'The real life around you is still here to notice.',
  opening:
    'Compulsive pornography use pulls attention away from real-world moments. MyHGY works alongside any professional support you are using — not as a replacement for it. Its job here is to help you notice and keep the real things your days contain.',
  mechanism:
    'When the impulse is present, real life can feel thin by comparison. MyHGY works by pulling attention to what is actually here — specific moments of choice, connection, and engagement with your real days. Writing each one down immediately creates a record of what you chose instead and what your days already contain. Over time, that record builds the case for what is real and worth staying close to.',
  moments: [
    {
      title: 'A moment you chose differently',
      example:
        'You noticed the impulse and turned toward something else — a task, a person, an activity in real life. Write down what you did instead.',
      meaning: 'This is evidence your capacity to choose is operating.',
    },
    {
      title: 'Real-world connection',
      example:
        'A conversation that felt genuine, time with another person, a moment of contact that was real. Write down what happened.',
      meaning: 'This proves real connection is available in your days. It belongs on record.',
    },
    {
      title: 'Something constructive done',
      example:
        'A task completed, a goal moved toward, time used well in the real world. Write it down while the specifics are still clear.',
      meaning: 'Your capacity to engage with your real life is still here. The record needs to show that.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
  continuationBridge: 'Keep going with MyHGY — the record of what is real gives you something solid to return to.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_ANXIETY: DoorwayApiResponse = {
  kind: 'guidance',
  headline: 'Your days have real, solid things in them — here is where to look.',
  opening:
    'Anxiety makes the day feel uncertain even when the present moment is actually manageable. MyHGY works by noticing what is real and specific right now — the things that are happening, not the things that might. Three moments, written as they occur.',
  mechanism:
    'When attention is pulled toward what could go wrong, it skips past what is already going right or going fine. MyHGY works by pulling it back — to the specific thing handled, the conversation that helped, the moment that was okay. Writing it down immediately keeps it from disappearing before the next worry arrives. Over time those pages show how much of your actual day was manageable.',
  moments: [
    {
      title: 'Something handled despite the pressure',
      example:
        'A task completed, a decision made, a situation managed — even while things felt uncertain. Write it down before the next pressure replaces it.',
      meaning: 'This is evidence that you can act even when it is hard. That belongs in writing.',
    },
    {
      title: 'A moment the load felt lighter',
      example:
        'A stretch when things steadied — a conversation that helped, a breath taken, a task that felt normal. Write it down while it is still clear.',
      meaning: 'These moments prove manageable stretches are still happening in your days.',
    },
    {
      title: 'Something noticed in the present',
      example:
        'Something real that caught your attention — a detail, a sound, something in front of you right now. Write it down while it is still here.',
      meaning: 'Attention finding the present moment is where the practice starts and builds from.',
    },
  ],
  practice:
    'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
  continuationBridge: 'Keep going with MyHGY — the record of what was manageable is what builds from here.',
  meta: { safety_flag: false, followup_needed: false, word_count: 0 },
}

const FALLBACK_BY_CARD: Record<string, DoorwayApiResponse> = {
  'I have ADD or ADHD.': FALLBACK_ADD_ADHD,
  "I'm getting divorced.": FALLBACK_DIVORCE,
  'I stopped drinking.': FALLBACK_DRINKING,
  'I lost my job.': FALLBACK_JOB_LOSS,
  'Someone I love died.': FALLBACK_GRIEF,
  'I am overweight.': FALLBACK_OVERWEIGHT,
  'I am depressed.': FALLBACK_DEPRESSION,
  'I feel behind in life.': FALLBACK_BEHIND,
  "I can't stop gambling.": FALLBACK_GAMBLING,
  'I keep putting things off.': FALLBACK_PROCRASTINATION,
  'Porn is affecting my life.': FALLBACK_PORNOGRAPHY,
  'I feel anxious or overwhelmed.': FALLBACK_ANXIETY,
}

export function getFallback(situationCard: string | null): DoorwayApiResponse {
  if (situationCard !== null && situationCard in FALLBACK_BY_CARD) {
    return FALLBACK_BY_CARD[situationCard]
  }
  return FALLBACK_GENERAL
}
