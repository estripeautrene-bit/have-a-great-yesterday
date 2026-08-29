export interface ArticleBlock {
  type: 'lead' | 'h2' | 'p'
  text: string
}

export interface IdeasArticle {
  slug: string
  title: string
  excerpt: string
  lane: string
  color: 'green' | 'sun' | 'muted'
  date: string
  publishDate: string
  readTime: string
  intro?: string[]
  callout?: string
  outro?: string[]
  body?: ArticleBlock[]
  closingLine: string
  closingPath: string
}

export function useIdeasArticles() {
  const articles: IdeasArticle[] = [
    {
      slug: 'why-insight-fades',
      title: 'Why insight fades',
      excerpt: 'Why an idea can feel life-changing on Sunday and disappear by Wednesday — and what it takes to make it stick.',
      lane: 'Method',
      color: 'sun',
      date: 'August 2026',
      publishDate: '2026-08-25',
      readTime: '4 min read',
      intro: [
        "You read the book in two nights. Something in chapter four landed hard, and you underlined half the page. At dinner you told your partner about it, because the idea was that good. You went to bed sure that this time something would shift.",
        "A week later, you're doing exactly what you did before.",
        "Here is what happened. The book gave you insight. Insight is a single strong exposure to a better way of thinking. It lands once, with force, and for a day or two you carry it around like a coin in your pocket. Then Monday arrives with its emails and its traffic and its old routines, and the insight gets quieter every hour until you can barely remember why it felt so important.",
        "This is the pattern behind every seminar high that fades by the weekend. Every video that fires you up for an afternoon. Every resolution that starts on January 1 and dies by February. The quality of the idea was fine. Some of those ideas were excellent. The real issue is that an idea you meet once is competing against a lifetime of daily repetition, and repetition wins.",
        "Your subconscious runs most of your day. It decides how you react before you have had time to think about it. And it works on one simple rule: it accepts whatever gets repeated into it. It skips the step of checking whether a thing is true. Say something to yourself often enough and your subconscious files it as fact, then builds your behavior around that fact. This is why a belief you have held for twenty years feels like solid ground even when it started as a guess. It got repeated. That was enough to make it real to you.",
        "A single insight stands little chance against all that. To make it stick, you have to give it what your old beliefs already have: reps. Daily reps, on purpose.",
        "So the work becomes clear. Repeat the new belief every day until it moves from an idea you agree with into a fact your subconscious treats as real. And the most useful belief to build is the one most people let slip through their fingers: that you are already making progress right now, with proof to show for it.",
        "Look at any ordinary day and it is full of small proof. Your boss said the deck was sharp. A client called back. You stayed calm in a hard conversation. Your kid looked up and smiled at something you said. Those are real wins. They happen daily. And they slip past the moment they occur, because you have trained your eyes to scan for the finish line instead of the ground you are already covering.",
        "That daily proof is your raw material. Written down and repeated, it becomes the belief your subconscious accepts, and then confidence stops being a feeling you wait for and becomes a record you can read.",
      ],
      callout: "Here is the thing to do today. Tonight, before you sleep, write down three real things that went right. Keep them true and specific: the exact comment, the actual call, the real moment your kid smiled. Three is enough to start the repetition and few enough that you will still be doing it tomorrow. Then do it again the next night. And the next. Inside two weeks you will hold a written record of forty or fifty pieces of evidence that you are moving forward, and your subconscious will begin to treat that record as the truth of who you are.",
      outro: [
        "Insight opens the door. Repetition walks you through it. The book was right all along. You simply needed a way to keep the idea alive long enough for it to matter.",
      ],
      closingLine: 'Begin the practice on the Method page and write your first three tonight.',
      closingPath: '/method',
    },
    {
      slug: 'the-raw-material-youre-already-sitting-on',
      title: "The raw material you're already sitting on",
      excerpt: 'The wins that happen to you every single day, and why most people never learn to use them.',
      lane: 'Method',
      color: 'sun',
      date: 'August 2026',
      publishDate: '2026-08-25',
      readTime: '4 min read',
      intro: [
        "You think you need more before anything changes. More discipline. Another course. A cleaner morning routine. The right planner. You keep searching for the missing piece that finally makes you feel like you are getting somewhere.",
        "Here is the part worth hearing: the piece you are searching for is already in your hands. It arrived today. You let it slip.",
        "Think back over the last few hours. Someone thanked you for something small. A message you were dreading turned out fine. You fixed a problem at work that had been sitting there for a week. A friend texted to say the thing you told them last month actually helped. Each of those is a real win. Each one happened. And each one vanished the second it occurred, because your attention was already three tasks ahead.",
        "This is the ordinary shape of a day. Good things land constantly, and they leave no trace, because you register them as normal instead of as proof. A win you treat as normal teaches you nothing. A win you write down starts to change what you believe about yourself.",
        "Your subconscious accepts whatever gets repeated into it. It makes no judgment about whether a belief is accurate. It simply takes what shows up most often and turns it into your default sense of who you are. Right now the thing showing up most often is the pressure of what is still undone, so that pressure has become your default. Meanwhile the evidence that you are capable and moving forward arrives every single day and gets thrown away before it can register.",
        "That evidence is the raw material. It is already being produced. You are sitting on a fresh supply of it every day without spending a dollar or an extra hour to get it. The whole job is to stop letting it slip and start putting it where it can do some work.",
        "The way you keep it is plain. You notice at least three real wins a day, and you write them down. Writing is what gets a win past the surface and into the place where beliefs are built. Said once in your head and forgotten, a win evaporates. Written down and repeated night after night, it stacks. And a stack of written evidence is what your subconscious starts to accept as fact: I am someone who makes things happen. That belief, repeated enough, changes how you carry yourself into the next day.",
        "Notice the shift here. You are done hunting for a new source of motivation. The source has been running the whole time. A boss's offhand compliment, a client call that went well, a workout you finished when you wanted to quit, the moment your kid grabbed your hand without being asked. This is gold you have been walking past.",
      ],
      callout: "Here is the thing to do today. Pick three real wins from the last twenty-four hours and write them down right now, before you keep reading anything else. Make them specific and true. Then set a time tonight to do the same thing again, and treat that time as fixed. Three real wins a day, written, is the entire starting move.",
      outro: [
        "You already have everything you need to begin. It showed up today, the way it shows up every day. Start keeping it.",
      ],
      closingLine: 'Try the practice on the Method page and log your first three now.',
      closingPath: '/method',
    },
    {
      slug: 'why-three-is-the-number',
      title: 'Why three is the number',
      excerpt: "The floor behind the MyHGY practice, and why fewer than three a day isn't enough for the mechanism to work.",
      lane: 'Method',
      color: 'sun',
      date: 'August 2026',
      publishDate: '2026-08-25',
      readTime: '4 min read',
      intro: [
        "You have tried to keep track of your progress before. It went one of two ways. Either you captured nothing, because life moved too fast to stop and write. Or you went the opposite direction, tried to record everything, turned it into a giant daily task, and quit within a week because it felt like homework.",
        "Both endings are common. Both come from the same missing piece: the right number.",
        "Here is what is actually happening. A record of your wins works through repetition. Your subconscious accepts whatever gets repeated into it, so the goal is to feed it real evidence often enough for the evidence to stick. Capture nothing and there is no repetition, so nothing sticks. Try to capture everything and the practice becomes so heavy you abandon it, so the repetition stops after a few days. Either way the evidence fails to reach the place where beliefs are built.",
        "Three solves both problems at once.",
        "Three real wins is enough repetition to start reshaping what your subconscious believes about you. One win a day is easy to shrug off as a fluke. Three wins, night after night, builds into a pattern your mind can no longer dismiss. The pattern says: this keeps happening, so this is who I am. That is the whole mechanism working exactly as intended.",
        "Three is also light enough to sustain. You can find three real things that went right in almost any day, even a hard one, in under two minutes. A practice that takes two minutes survives the days when you are tired, busy, or discouraged, and those are the days that decide whether a habit lasts. A practice that takes twenty minutes dies the first week that gets rough. Sustainability is the point, because the power comes from doing this every day, and a thing you do every day has to be small enough to repeat forever.",
        "Then there is quality. When you limit yourself to three, you choose. You skip the filler and reach for the wins that carry real weight: the comment from your boss that stayed with you, the call that finally closed, the moment you handled something hard and stayed steady. Three chosen wins beat ten forced ones, because your subconscious responds to evidence that feels true, and true evidence tends to be specific. A short list keeps you honest and keeps you specific.",
        "Watch how this plays out over a month. Three wins a night is roughly ninety pieces of written evidence that you are capable and moving forward. Ninety. Read back through a stretch of that record and the effect is direct: you can see your own progress laid out in your own words, and it becomes very hard to keep telling yourself you are stuck. The number that felt almost too small is the number that got you to ninety, because it is the number you kept doing.",
      ],
      callout: "Here is the thing to do today. Tonight, write exactly three. No more, even if a great fourth comes to mind. Hold the discipline of three, because the constraint is doing the work. Make each one real and specific. Then do it again tomorrow.",
      outro: [
        "Three is small enough to keep and strong enough to change what you believe. That combination is rare, and it is the reason three is the number.",
      ],
      closingLine: 'Start tonight on the Method page. Write your three.',
      closingPath: '/method',
    },
    {
      slug: 'confidence-comes-from-evidence',
      title: 'Confidence comes from evidence',
      excerpt: 'Why real self-confidence has to be built on a record, not a mood or a pep talk.',
      lane: 'Method',
      color: 'sun',
      date: 'August 2026',
      publishDate: '2026-08-25',
      readTime: '4 min read',
      intro: [
        "You are waiting to feel ready. You want the confidence first, and then you will make the call, ask for the raise, start the thing you keep circling. So you wait for the feeling to arrive on its own. It stays just out of reach, and the waiting stretches into months.",
        "Here is the correction that changes everything: confidence arrives after the evidence, not before it. You have the order backward, and the backward order is why the feeling keeps missing you.",
        "Think about where real confidence actually comes from. A surgeon is confident because they have done the operation four hundred times and have the outcomes to prove it. A closer is confident because they have a record of deals that shows they can do this. Confidence in any area is built on a stack of proof that says: I have done this, it worked, I can do it again. Take the proof away and the feeling has nothing to stand on. Add proof and the feeling shows up on its own, without being chased.",
        "So the question becomes simple. Where is your proof? For most people the answer is that the proof arrived and got thrown away. Real wins land every day and slip past before they register, because you were trained to look for the big result instead of the daily evidence. You had a good week and still went to bed feeling behind, not because the week lacked wins, but because you kept none of them.",
        "Your subconscious accepts whatever gets repeated into it. Repeat the story that you are falling short and your subconscious files that as fact, and you carry the feeling of falling short into every room. Repeat the evidence that you are capable and moving, and your subconscious files that instead. Same mechanism, different input. Confidence, the S in CAS, is the direct output of feeding your subconscious a steady supply of real evidence about yourself.",
        "This is why confidence has to be built rather than summoned. You build it the way you build anything solid: one piece at a time, on purpose, daily. And the pieces are already being handed to you. The manager who said your work saved the launch. The friend who took your advice and thanked you for it. The run you finished when you wanted to stop at the halfway mark. The email you had been dreading that you finally sent. Each is a brick. Written down and stacked, night after night, they become a foundation your confidence can stand on.",
      ],
      callout: "Here is the thing to do today. Write down three pieces of proof from today that show you are capable. Real ones, specific ones, in your own words. Then read them back once. That short read is you handing your subconscious the input you want it to accept. Do it again tomorrow, and the day after, and inside a couple of weeks you will have a written case for yourself that is hard to argue with even on a low day.",
      outro: [
        "Stop waiting for confidence to visit. Build the evidence and confidence follows, because it was always the output, never the starting line.",
      ],
      closingLine: 'See how the practice builds your case on the Method page, and write your three today.',
      closingPath: '/method',
    },
    {
      slug: 'the-wish-to-goal-gap',
      title: 'The wish-to-goal gap',
      excerpt: "What actually separates something you want from something you go get — and why it isn't ambition.",
      lane: 'Method',
      color: 'sun',
      date: 'August 2026',
      publishDate: '2026-08-25',
      readTime: '4 min read',
      intro: [
        "You have a wish you have carried for years. Start the business. Write the book. Get the body back. Leave the job. It sits in your mind, real and specific, and somehow it stays exactly where it has always been: a wish. Time passes and it moves nowhere, and you start to wonder whether you are the kind of person who ever actually does the big thing.",
        "Here is what stands between the wish and the result. A wish becomes a goal only when part of you believes you can pull it off. Belief is the bridge. Without it, the wish stays a daydream you visit now and then, and daydreams demand nothing of you, which is exactly why they never move.",
        "So the real question is where that belief comes from. It comes from evidence about yourself. You believe you can do a hard thing when you have proof that you have done hard things before. Take away the proof and belief has nothing to stand on, so the wish stays a wish no matter how badly you want it. The gap between wishing and doing is a gap in self-evidence.",
        "This is where the daily practice does its quiet, serious work. Your subconscious accepts whatever gets repeated into it, and it makes no judgment about whether the belief is accurate. It simply takes the most repeated input and turns it into your sense of what you are capable of. Feed it three real wins a day, written down, and over weeks it builds three things at once: clarity about what is actually happening in your life, accuracy about your real capability, and self-confidence rooted in proof. That is CAS. And CAS is the precondition for turning a wish into a goal. With it, the wish becomes something you can plan and pursue. Without it, you are only dreaming.",
        "Look at how this plays out. Someone wants to start a business, but every time they picture it, a voice says who are you to do that. That voice is a repeated belief, built from years of throwing away their own evidence. Now they start writing three wins a day. Handled a tough client. Taught themselves a skill over a weekend. Sold a friend something they made. Ninety days later they have a written record of a person who solves problems, learns fast, and sells. The wish to start a business now has evidence underneath it, and the voice that said who are you has a much weaker case. The wish has become a goal, because the belief finally has proof to stand on.",
        "The order matters. People try to close this gap with pressure, deadlines, and force of will, and they wonder why the wish keeps sliding back. The bridge was never willpower. It was accurate self-belief, and accurate self-belief is built from a daily supply of real evidence.",
      ],
      callout: "Here is the thing to do today. Take the wish you have carried longest and write it at the top of a page. Underneath it, start your evidence: three real things from today that show you are the kind of person who could actually do that. Add three more tomorrow. You are laying the foundation the wish has been missing.",
      outro: [
        "The wish was always reachable. It was waiting on the proof. Start collecting it.",
      ],
      closingLine: 'Build the foundation on the Method page and write your first three today.',
      closingPath: '/method',
    },
    {
      slug: 'earned-anticipation',
      title: 'Earned anticipation',
      excerpt: "The feeling that shows up before a good result arrives, and why it only exists once you've put in the work.",
      lane: 'Method',
      color: 'sun',
      date: 'August 2026',
      publishDate: '2026-08-25',
      readTime: '4 min read',
      intro: [
        "There is a version of looking forward that lifts you, and a version that lets you down. You know both. The pump-up video and the big Sunday-night plan give you a rush of anticipation that feels great for an evening and collapses by Tuesday. Then there is the quieter kind of forward pull, the one that has you wake up actually expecting the day to go somewhere. The second kind lasts. The difference between them is worth understanding, because one of them you can build on purpose.",
        "Here is the distinction. Anticipation built on hype rests on nothing. You felt good for an evening because a video told you that you could, and feeling was all you had, so it faded the moment life pushed back. Anticipation built on evidence rests on a record. You expect tomorrow to go somewhere because you have a written stack of days that already went somewhere, and that stack is real. The first is borrowed. The second is earned.",
        "Earned anticipation comes from the same mechanism that runs everything else here. Your subconscious accepts whatever gets repeated into it. Repeat the evidence that you move things forward, day after day, and your subconscious starts treating forward motion as your normal. And once forward motion is your normal, tomorrow stops feeling like a threat and starts feeling like more of what you already do. That is the quiet lift. It is not a mood you chase. It is the natural result of holding proof that you are already on your way.",
        "Watch how it builds. You start writing three real wins a night. Closed a deal. Held your temper in a meeting that used to wreck you. Went for the run. After one week you read back seven days of proof that you handle things and make progress. Reading it does something specific: it hands your subconscious direct evidence, and your subconscious files it as truth. Now when you think about the week ahead, the feeling attached to it has changed. You have a track record staring back at you, and a track record makes the future feel reachable, because the future is just more of a pattern you can already see in writing.",
        "This is why earned anticipation outlasts the hype version by a wide margin. Hype has to be re-administered constantly, a new video every few days, because it produces no evidence and leaves nothing behind. The daily practice produces evidence every single day, so the forward pull compounds instead of fading. Week two feels steadier than week one. Month two steadier than month one. You are not topping up a feeling. You are stacking proof, and the anticipation rides on top of the stack.",
      ],
      callout: "Here is the thing to do today. Write your three wins tonight, then read back everything you have written across the last several days in one sitting. Feel what that record does to how you picture tomorrow. That feeling is earned. You built it, and you can build more of it every night.",
      outro: [
        "Skip the borrowed rush. Stack the real evidence and let the forward pull take care of itself.",
      ],
      closingLine: 'Start the record on the Method page and write your three tonight.',
      closingPath: '/method',
    },
    {
      slug: 'the-power-of-returning',
      title: 'The power of returning',
      excerpt: "Why missing a day doesn't break the practice, and why the return is the practice.",
      lane: 'Method',
      color: 'sun',
      date: 'August 2026',
      publishDate: '2026-08-25',
      readTime: '4 min read',
      intro: [
        "You started strong. Five nights in a row you wrote your three wins, and it felt good. Then a chaotic day hit, you skipped it, and the next night you skipped it again because now there was a gap. By the end of the week the whole thing felt broken, so you let it go, told yourself you would restart properly on Monday, and Monday came and went. Sound familiar? This is how most good practices die, and the cause is a single belief worth correcting.",
        "Here is what actually happened. You decided that a missed day equals failure, and that failure equals over. That belief did more damage than the missed day ever could. The missed day cost you almost nothing. The story you told yourself about the missed day cost you the entire practice.",
        "The mechanism explains why the missed day matters so little. Your subconscious accepts whatever gets repeated into it, and repetition is cumulative. It builds from the total weight of everything you have fed it, not from a perfect unbroken chain. Five nights of written evidence stays in you whether or not night six happened. One gap changes the total by a rounding error. What actually determines the outcome is whether you come back, because coming back keeps the weight accumulating, and stopping is the only move that truly ends it.",
        "So the skill that matters most here is returning. Perfection was never available and was never the point. The people who get the compounding effect of this practice are simply the ones who return after every gap, again and again, for months. They miss a night like everyone does, and the next night they write their three and keep the total climbing. The gap becomes a footnote. The return becomes the story.",
        "Look at the two paths side by side. One person keeps a flawless streak for nine days, misses on day ten, decides it is ruined, and quits. Total evidence collected: nine days. Another person writes their three, misses here and there across a rough month, returns every time, and reaches the end with twenty-two days recorded out of thirty. Total evidence collected: twenty-two days, and a subconscious steadily learning that this is who they are. The second person misses more days than the first and ends up far ahead, for one reason: they returned instead of stopping.",
        "This takes the pressure off in the best way. You are freed from the fragile logic of the perfect streak, where one slip ruins everything and one bad week erases a good month. Under the returning model, a missed day is just a missed day, and the practice is always one night away from being back on track. That resilience is what lets it survive long enough to work, because real life includes hard days, and a practice that cannot survive a hard day cannot survive at all.",
      ],
      callout: "Here is the thing to do today. If you have a gap behind you, close it right now by writing three wins from today. Skip the guilt and skip the plan to restart on some cleaner future date. The clean date is today, the moment you return. Then treat every future gap the same way: return the next chance you get.",
      outro: [
        "Missing a day changes little. Returning is the whole game. Come back tonight and keep the weight climbing.",
      ],
      closingLine: 'Return to the practice on the Method page and write your three now.',
      closingPath: '/method',
    },
    {
      slug: 'what-cas-actually-builds',
      title: 'What CAS actually builds',
      excerpt: 'Clarity, Accuracy, Self-Confidence — and how each one shows up in real decisions, not just theory.',
      lane: 'Method',
      color: 'sun',
      date: 'August 2026',
      publishDate: '2026-08-25',
      readTime: '4 min read',
      intro: [
        "You have chased confidence directly and watched it slip away every time. You told yourself to think positive, to believe in yourself, to walk in like you owned the room. It worked for about an hour. Confidence pursued head-on behaves like a shy animal: the harder you reach for it, the faster it backs away. There is a reason for that, and understanding it points to a far more reliable path.",
        "Confidence is an output. It gets produced by something underneath it. That something has three parts, and together they are called CAS: Clarity, Accuracy, and Self-Confidence. When you build the first two on purpose, the third arrives on its own, which is exactly why reaching for confidence directly keeps failing. You were grabbing at the result and skipping the two things that produce it.",
        "Start with where all three come from. Your subconscious accepts whatever gets repeated into it, with no judgment about whether the input is true. Feed it three real wins a day, written down, and repeat that for weeks, and you build each part of CAS in turn.",
        "Clarity comes first. Most days blur together, and the good in them disappears under the noise of what is still undone. Writing three real wins a night forces you to look and name what actually happened. Over time you see your life more clearly, because you have a written record of it instead of a vague sense that things are just happening to you. You know what is going right, in specific terms, in your own words.",
        "Accuracy comes next. Left alone, your self-image drifts away from the facts, almost always in the harsh direction. You feel behind on a week that was full of wins, because the story in your head stopped matching reality a long time ago. A daily record of real evidence pulls that story back to the truth. Your sense of yourself starts to match what is actually happening, so you stop underrating your progress and stop treating a good week as a bad one. Accuracy is your self-view lining up with reality.",
        "Then self-confidence follows, because it has to. Once you see your life clearly and judge yourself accurately, you are standing on a stack of real proof that you are capable and moving forward. Confidence built on that stack holds up, because it rests on evidence rather than on a pep talk. This is the confidence that stays with you on a hard day, since the proof is written down and you can read it whenever the old doubt starts talking.",
        "Here is what CAS makes possible, and it is the whole reason to build it. CAS is the precondition for turning a wish into a goal. When you can see your life clearly, judge yourself accurately, and stand on real proof of your capability, a wish stops being a daydream and becomes something you can plan and pursue. Without CAS, the wish stays a wish and you are only dreaming. With it, you have the foundation that real goals are built on. Clarity, accuracy, and self-confidence are not the finish line. They are the ground the finish line gets built on.",
      ],
      callout: "Here is the thing to do today. Write three real wins tonight and, next to each, name which part it builds: does it make your life clearer, correct your view of yourself, or add proof of what you can do? That small extra step shows you the machine working in real time.",
      outro: [
        "Build CAS the direct way, one honest day at a time, and let confidence arrive as the output it always was.",
      ],
      closingLine: 'See how the full Method builds CAS on the Method page, and write your three today.',
      closingPath: '/method',
    },
    {
      slug: 'how-to-practice-personal-development',
      title: 'How to Practice Personal Development: The MyHGY™ Method',
      excerpt: 'A simple daily practice: notice at least three good things while they are happening, write each one down immediately, and repeat every day.',
      lane: 'Method',
      color: 'sun',
      date: 'August 2026',
      publishDate: '2026-08-29',
      readTime: '7 min read',
      body: [
        {
          type: 'lead',
          text: 'The MyHGY™ Method is a simple daily personal-development practice: notice at least three good things while they are happening, write each one down immediately, and repeat the practice every day.',
        },
        {
          type: 'p',
          text: 'There are days when one bad email, one argument, one disappointment, or one thing that did not go your way seems to become the story of the entire day. By the evening, you can feel behind, frustrated, or discouraged even though other good things happened too. The problem is not that those good moments were unimportant. The problem is that they disappeared from attention while the negative one stayed loud.',
        },
        {
          type: 'p',
          text: 'That is one of the quiet problems personal development rarely solves on its own. We can understand negativity bias, presence, confidence, or perspective intellectually and still spend most of the day being pulled around by whatever thought or event has the most emotional weight. What we need is a simple practice that brings us back to what is actually happening while the day is still happening.',
        },
        {
          type: 'p',
          text: 'Most people who care about personal development already know a surprising amount. They have read books, listened to podcasts, taken courses, worked with coaches, or had conversations that changed the way they saw something important. The problem is rarely a complete lack of insight. The problem is what happens afterward. A useful idea can feel obvious on Sunday and almost disappear by Wednesday because ordinary life has resumed and nothing is keeping that idea active.',
        },
        {
          type: 'p',
          text: 'That is why personal development deserves a practice. We accept this in almost every other area of life. If you want to become stronger, you exercise repeatedly. If you want to improve at a sport or learn an instrument, you practice. You do not expect understanding alone to create improvement. MyHGY™ Method applies the same logic to personal development by giving you one small thing to practice every day: consciously notice the good things that happen in your life and write them down while they are still happening.',
        },
        {
          type: 'h2',
          text: 'The practice is simple on purpose',
        },
        {
          type: 'p',
          text: 'Carry a small notebook and a pen with you during the day. As you move through normal life, pay attention to moments that make you feel good, encourage you, show you that something is moving in the right direction, or simply make the day better. When one happens, stop for a few seconds and write it down. Aim for at least three captures every day.',
        },
        {
          type: 'p',
          text: "The moments do not need to be important by anyone else's standards. A client can send you an encouraging email. Someone can compliment your work. You can have a good conversation with your child, finally solve a problem that has been bothering you, hear from an old friend, finish something you had been putting off, or simply enjoy a cup of coffee more than usual. The question is not whether the moment is impressive. The question is whether it affected you positively and is worth keeping.",
        },
        {
          type: 'p',
          text: 'The reason to write it down immediately is simple: these moments disappear quickly. At 10:30 in the morning, a compliment may genuinely lift your mood. By 4:00 in the afternoon, several problems may have pushed it almost completely out of your attention. By the time someone asks how your day went, you may answer based on the last difficult thing that happened rather than on the full day you actually lived. MyHGY interrupts that process by preserving the moment before memory has a chance to flatten it.',
        },
        {
          type: 'h2',
          text: 'Writing is part of the practice',
        },
        {
          type: 'p',
          text: 'It is tempting to think that noticing is enough, but writing changes the experience. The moment you reach for the notebook, you have to stop briefly and pay attention to what just happened. You choose a few words to describe it, which forces the experience to register more clearly. You also create a record that remains after the feeling itself has faded.',
        },
        {
          type: 'p',
          text: 'This is not meant to become elaborate journaling. One or two sentences are enough. "Great call with Maria about the project." "Lou told me she was proud of me." "Finished the workout even though I wanted to skip it." "Received the email I had been waiting for." The purpose is not to produce beautiful writing. The writing is simply the mechanism that helps you notice, preserve, and keep something that would otherwise be easy to lose.',
        },
        {
          type: 'p',
          text: 'That is also why the practice happens during the day rather than as an exercise before bed. Looking back at night can be useful, but it relies on memory after many of the smaller moments have already faded. MyHGY begins earlier. It trains you to become aware of the day while you are actually living it.',
        },
        {
          type: 'p',
          text: 'There is another reason the practice matters. It anchors your attention in the day you are actually living. Our minds constantly move ahead of reality, predicting what may happen, rehearsing conversations, imagining outcomes, and turning possibilities into experiences that can feel real before they are real. MyHGY creates a small daily counterweight to that tendency. Each time you notice something good that actually happened and write it down, you return your attention to lived reality. You are not imagining a better life or trying to think positively about the future. You are recording something positive that is true now. Repeated every day, that becomes a practical way of staying more connected to the life that is actually happening.',
        },
        {
          type: 'h2',
          text: 'Why three, and why every day?',
        },
        {
          type: 'p',
          text: 'There is nothing special about the number three. It is a floor. Telling yourself to "notice more good things" is an intention, but it does not give you a clear practice. A minimum of three creates a simple boundary. You know what you are trying to do, and you know whether you did it.',
        },
        {
          type: 'p',
          text: 'Some days you may capture exactly three moments. Other days you may find five, eight, or twelve. The number above three matters less than the fact that you are looking. Over time, that repeated search begins to change what gets your attention. Experiences that once would have passed unnoticed start becoming easier to see because you have trained yourself to recognize them.',
        },
        {
          type: 'p',
          text: 'Continuity is the most important part. MyHGY is not something to do occasionally when you happen to remember or when life is going particularly well. The practice is to do it every day. The old patterns of attention in your life already have years of repetition behind them. A new way of paying attention needs repetition too. The value comes from consciously returning to the practice tomorrow, and then doing the same thing the day after that.',
        },
        {
          type: 'h2',
          text: 'What begins to change',
        },
        {
          type: 'p',
          text: 'At first, the most obvious benefit may simply be that you remember more of what actually happened. Your notebook starts containing things that would otherwise have disappeared. That alone can change the way you look back at a day or a week because you are no longer depending entirely on whatever your mind happens to retrieve in the moment.',
        },
        {
          type: 'p',
          text: 'With repetition, something more interesting can happen. You become more conscious while the day is unfolding. You notice encouragement sooner. You notice progress that is too small to announce itself. You notice moments of connection, competence, enjoyment, follow-through, and movement that previously would have been absorbed into the background of ordinary life.',
        },
        {
          type: 'p',
          text: 'This does not mean pretending that everything is good. Difficult things still happen, and MyHGY does not ask you to deny them. The purpose is to make your record of life more complete. One frustrating conversation should not automatically erase the three good conversations that happened before it. One disappointing result should not be allowed to become the entire story when other evidence was present too.',
        },
        {
          type: 'p',
          text: 'That fuller view is where the broader MyHGY destination begins to make sense: <strong>Clarity. Accuracy. Self-Confidence.</strong> Clarity comes from paying closer attention to the life you are actually living. Accuracy improves when your judgment of a day, a period of your life, or even yourself is informed by more than the loudest negative event. Self-confidence can grow when you repeatedly see that you are moving, contributing, connecting, learning, and showing up in ways that memory might otherwise fail to preserve.',
        },
        {
          type: 'h2',
          text: 'How to start today',
        },
        {
          type: 'p',
          text: 'You do not need to prepare for this practice. Get a small notebook, put a pen with it, and carry both with you. During the day, notice what feels worth keeping and write it down while it is still fresh. Reach three before the day is over, then do the same thing tomorrow.',
        },
        {
          type: 'p',
          text: 'If you want to look back through the notebook later, you can. You may discover patterns or see progress that was difficult to recognize while it was happening. But reviewing is optional. The essential practice is happening in the present: noticing, writing, and continuing every day.',
        },
        {
          type: 'p',
          text: 'That is the MyHGY™ Method in its simplest form. It turns personal development from something you only read, hear, or think about into something you actually practice. <strong>Personal development deserves a practice.</strong>',
        },
      ],
      closingLine: 'Begin the practice on the Method page.',
      closingPath: '/method',
    },
  ]

  function findArticle(slug: string): IdeasArticle | null {
    return articles.find(a => a.slug === slug) ?? null
  }

  return { articles, findArticle }
}
