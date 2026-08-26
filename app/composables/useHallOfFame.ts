export interface HallOfFameEntry {
  slug: string
  name: string
  role: string
  keyWork: string
  previewDesc: string
  metaDesc?: string
  intro: string[]
  sections: {
    heading: string
    paragraphs: string[]
  }[]
  connection: string[]
  seeAlso?: { label: string; path: string }
  disclaimer?: string
}

export function useHallOfFame() {
  const entries: HallOfFameEntry[] = [
    {
      slug: 'dan-sullivan',
      name: 'Dan Sullivan',
      role: 'Founder, Strategic Coach',
      keyWork: 'The Gap and the Gain (with Benjamin Hardy) · 10x Is Easier Than 2x (with Benjamin Hardy)',
      previewDesc: "The idea that a life built on great todays produces great yesterdays — and that the past is one of the best predictors of the future.",
      metaDesc: "Dan Sullivan and Dr. Benjamin Hardy address an important problem: people can make real progress and still fail to experience it because they lose sight of how far they have come. That insight strongly reinforces the territory MyHGY™ occupies.",
      intro: [
        "Dan Sullivan is the founder of Strategic Coach, an entrepreneurial coaching program that has run continuously since 1988. Over more than three decades of working directly with entrepreneurs, Sullivan developed a set of frameworks around the relationship between past experience, present identity, and future capability.",
      ],
      sections: [
        {
          heading: 'The Gap and the Gain',
          paragraphs: [
            "Sullivan's most recognized contribution is the distinction between measuring in the Gap and measuring in the Gain — a framework developed through decades of direct work with entrepreneurs and brought to a wide audience in a 2021 book he co-authored with Dr. Benjamin Hardy. The Gap is the distance between where you are and where you want to be — the distance to your ideal. The Gain is the distance you have actually traveled from where you started.",
            "High achievers often suffer not because they lack progress but because they measure against an ideal that retreats as they approach it. Progress disappears as soon as it is benchmarked against a higher target. The result is a person who has done a great deal but cannot feel it.",
            "Measuring in the Gain means turning around and measuring backward — counting what actually happened, what actually changed, what was actually built. The past becomes usable material rather than something to escape from.",
          ],
        },
        {
          heading: 'Collecting wins as an identity practice',
          paragraphs: [
            "A closely related idea in Sullivan's work is that deliberately noting and preserving what went well — wins, progress, moments of capability — does something more than improve mood. It shapes the operating picture of what you are capable of.",
            "Sullivan's framing is structural rather than motivational: what you consciously collect and preserve about your past performance becomes the evidence base from which you take future action. A person with no visible record of their own capability has only uncertainty to navigate from. A person with a collected, preserved record has something else available.",
            "Sullivan has worked within this territory for more than three decades. His contribution is less theoretical than practical — frameworks built from repeated direct observation of what changes when people change how they relate to their past.",
          ],
        },
      ],
      connection: [
        "The MyHGY Method grew from René Estripeaut's own practice — a years-long habit of gratitude work, structured reflection, Three Good Things exercises, and real-time capture of what actually happened in a day. That practice was already the foundation of MyDopa when René encountered Sullivan's work and the story behind the name \"Have a Great Yesterday.\" Sullivan and Hardy address an important related problem: that people can make real progress and still fail to experience it, because they lose sight of how far they have come. That insight strongly reinforces the territory MyHGY™ occupies. The method was developed independently and follows its own methodology.",
        "Sullivan's work provides a practical language for a common human problem, and The Gap and the Gain makes that dynamic legible for a wide audience. The relationship between Sullivan and Hardy's framework and MyHGY™ is one of important intellectual adjacency and reinforcement — not shared mechanism or derivation.",
      ],
      seeAlso: { label: 'Where the phrase "Have a Great Yesterday" comes from', path: '/history' },
    },
    {
      slug: 'eckhart-tolle',
      name: 'Eckhart Tolle',
      role: 'Author and teacher',
      keyWork: 'The Power of Now · A New Earth',
      previewDesc: "The distinction between the present moment and the mind's version of the past or future — the foundation of staying present enough to actually build a practice.",
      metaDesc: "Eckhart Tolle's distinction between a painful event and the story constructed around it underpins the MyHGY™ Method's view of difficult days.",
      intro: [
        "Eckhart Tolle is a contemporary spiritual author whose work centers on the distinction between direct present experience and the mind's narration of experience. His two most widely read books — The Power of Now (1997) and A New Earth (2005) — examine what happens when human beings live primarily inside their own mental commentary rather than in contact with what is actually occurring.",
      ],
      sections: [
        {
          heading: 'The event and the story about it',
          paragraphs: [
            "Tolle's central observation is that human beings have an extraordinary capacity to suffer not from what actually happened, but from the mental elaboration of it. The mind takes an event, interprets it, narrates it, judges it, and then continues running that narrative long after the event itself has ended.",
            "The event is complete. It happened. It is over. The suffering that often continues is not the event — it is the story the mind is telling about the event. And crucially, that story can be more durable, more vivid, and more formative than the event itself.",
            "Tolle is not dismissing the reality of painful events. He is pointing at something more precise: the distinction between the thing that occurred and the mental object constructed from it. These are not the same thing, and they do not have to be treated as the same thing.",
          ],
        },
        {
          heading: 'Presence and the mind\'s construction',
          paragraphs: [
            "Tolle's work on presence — the capacity to be in contact with what is actually happening rather than with the mind's commentary about it — has implications for how people relate to both their present experience and their past.",
            "A person who has learned to notice the difference between their direct experience and their mental narration of it has access to a distinction that most people spend their lives without. They can ask: is this the event, or is this what I am saying about the event? That question is not available to someone who cannot separate the two.",
            "The Power of Now has reached millions of readers worldwide in part because this distinction is both simple and difficult: most people intuitively recognize, when it is named precisely, that much of their suffering is narrative rather than situational.",
          ],
        },
      ],
      connection: [
        "The MyHGY Method begins from a premise that Tolle's work makes visible: a painful day and your story about a painful day are not the same thing. The method does not ask you to deny what was hard. It asks you to make contact with the whole day — not just the narrative you have already formed about it.",
        "When someone closes a day using the method, they are doing something structurally similar to what Tolle describes: making contact with what actually occurred rather than with the interpretation that has already attached itself to it. The method provides a repeatable structure for this contact. Tolle provides part of the conceptual groundwork for why the distinction between event and story is worth taking seriously at all.",
      ],
    },
    {
      slug: 'maxwell-maltz',
      name: 'Maxwell Maltz',
      role: 'Plastic surgeon and author',
      keyWork: 'Psycho-Cybernetics (1960)',
      previewDesc: "Self-image, and the idea that evidence of past success becomes the material for future confidence.",
      metaDesc: "Maxwell Maltz's model of self-image as a feedback mechanism is the direct intellectual basis for the MyHGY™ Method's evidence practice.",
      intro: [
        "Maxwell Maltz was a plastic surgeon who noticed something unexpected in his practice: patients who underwent surgery to correct a physical flaw sometimes continued to feel disfigured despite the successful outcome. The problem was not the face. It was the internal picture the patient held of themselves. This observation led Maltz to develop a model of self-image as the governing mechanism of human behavior, published in 1960 as Psycho-Cybernetics.",
        "Psycho-Cybernetics sold millions of copies and influenced a generation of coaches, athletes, and self-improvement writers. Its central claim remains one of the more precise accounts of why behavior change is difficult and what makes it possible.",
      ],
      sections: [
        {
          heading: 'Self-image as the operating mechanism',
          paragraphs: [
            "Maltz's central argument is that human beings act in accordance with their self-image — not their intentions, not their aspirations, not their stated goals. A person behaves in ways that are consistent with the internal picture they hold of themselves. If the picture is accurate and serves them, behavior tends to be effective. If the picture is distorted or outdated, behavior reflects the distortion.",
            "The cybernetic framework Maltz used was precise: the self-image functions as a servo-mechanism. It is goal-directed, self-correcting, and driven by feedback. When behavior deviates from the image, the system applies correction to bring behavior back into alignment with the image.",
            "This has a counterintuitive implication: trying to change behavior without updating the self-image is extremely difficult. The system keeps pulling behavior back toward what the image knows. Sustainable change requires updating the operating picture, not just the stated intention.",
          ],
        },
        {
          heading: 'Mistakes as correction information',
          paragraphs: [
            "Maltz drew a specific and consequential distinction between two ways of relating to failure. In the first, a mistake is a verdict — evidence of what a person fundamentally is. In the second, a mistake is information — specifically, information about where the course needs to correct. These produce very different outcomes over time.",
            "In the cybernetic model, only the second relationship to failure is functional. Servo-mechanisms do not interpret deviation as identity. They use deviation to adjust the next action. A person who can treat a failed attempt as correction data rather than as a reflection of what they are preserves their full capacity for learning.",
          ],
        },
        {
          heading: 'Preserved evidence and future capability',
          paragraphs: [
            "Maltz placed significant emphasis on the role of preserved, vivid remembered experience in updating the self-image. The nervous system, he observed, does not distinguish precisely between a clearly remembered experience and an actual one. A specific, detailed memory of past capability is usable data for the self-image — more so than an abstract belief.",
            "This gives the act of deliberately noting and preserving what went well a function beyond record-keeping. It is an act of providing the self-image with accurate, evidence-based material to work from when forming future behavior.",
          ],
        },
      ],
      connection: [
        "Maltz's framework is among the most direct intellectual predecessors of the MyHGY Method's underlying logic. The daily practice of reviewing what was good — what you did, what you handled, what you brought to the day — is not about feeling good in the moment. It is about providing the self-image with accurate, specific, evidence-based data.",
        "The method's emphasis on specificity — not 'I had a good day' but 'I did this specific thing, and here is what happened when I did it' — reflects Maltz's point that concrete, vivid evidence is more usable than general conviction. The method gives this a repeatable daily structure. Maltz provides the theoretical model for why that structure works.",
      ],
    },
    {
      slug: 'viktor-frankl',
      name: 'Viktor Frankl',
      role: 'Psychiatrist and author',
      keyWork: "Man's Search for Meaning (1946) · Logotherapy",
      previewDesc: "Meaning, responsibility, and the ability to choose a constructive response even when circumstances can't be changed.",
      metaDesc: "Viktor Frankl's work on what remains available after extremity grounds the MyHGY™ Method's view of what a difficult day still holds.",
      intro: [
        "Viktor Frankl was a Viennese psychiatrist who survived four Nazi concentration camps, including Theresienstadt and Auschwitz. His observations during that period — about what allowed some people to maintain psychological coherence and a sense of purpose under conditions of extreme deprivation — became the foundation for a form of psychotherapy he called logotherapy, and for the book he published after liberation in 1946.",
        "Man's Search for Meaning has been called one of the most influential books of the twentieth century. It is not a book about happiness or optimism. It is a book about what remains available to a human being when circumstances have taken away almost everything else.",
      ],
      sections: [
        {
          heading: 'The capacity that remained',
          paragraphs: [
            "What Frankl documented, across conditions of extreme deprivation, was a persistent human capacity: even when circumstances have removed almost everything, the possibility of a chosen response does not fully disappear. It becomes constrained, costly, and often small. But it remains.",
            "This is not optimism. Frankl was not arguing that terrible things are actually fine, or that attitude makes hardship pleasant. He was making a more precise claim: that a person under genuine constraint still retains some capacity to orient toward meaning, exercise agency in some form, and choose — within narrow limits — how to respond to what cannot be changed.",
            "The people Frankl observed who maintained coherence under extreme conditions did so by finding — or holding — a sense of meaning. Not comfort. Not denial. A reason for which bearing what must be borne was worth something.",
          ],
        },
        {
          heading: 'What remains available',
          paragraphs: [
            "Frankl's framework raises a question that applies at any level of difficulty: after something painful happens — after a hard day, after a failure, after a loss — what remains available to you?",
            "The common answer is: not much. The painful thing happened. The day is what it was. But Frankl's work pushes against this answer not as motivation but as careful observation. Even in extreme situations, more remained available than the circumstance seemed to permit. The question was whether the person in that circumstance could find it and use it.",
            "In the ordinary context of a difficult day — which is where most people encounter this question — the residue of availability is considerably larger. The difficult meeting happened. The conversation went poorly. The goal was not met. And then: what remains? What was still there in the day? What did you still do, still notice, still bring?",
          ],
        },
      ],
      connection: [
        "The MyHGY Method is grounded in a premise that Frankl's work supports: even after a hard day, something remains available. Not everything — not the good mood you did not have, not the outcome that did not come through. But something specific and real.",
        "The method asks you to look for it — not through positive thinking, not by denying what was hard, but by doing an honest accounting of the full day. What was there? What did you do? What happened that mattered, even alongside the things that were difficult?",
        "Frankl's contribution is the philosophical foundation for why that question is worth asking at all — and a demonstration, under conditions far more extreme than ordinary difficulty, that the answer is almost never empty.",
      ],
    },
    {
      slug: 'martin-seligman',
      name: 'Martin Seligman',
      role: 'Psychologist · University of Pennsylvania',
      keyWork: 'Learned Optimism · Flourish · "Three Good Things" (2005 paper)',
      previewDesc: "Positive psychology and Three Good Things — the direct ancestor of the nightly practice that shaped MyHGY.",
      metaDesc: "Martin Seligman's positive psychology research — including Three Good Things — provides scientific support for the MyHGY™ Method's evidence practice.",
      intro: [
        "Martin Seligman is a research psychologist at the University of Pennsylvania who, as president of the American Psychological Association in 1998, helped establish positive psychology as a recognized research field. The founding premise: psychology had spent most of its history studying pathology — what goes wrong in human beings. Positive psychology asks a different question: what allows human beings to function well, and what makes a life worth living?",
      ],
      sections: [
        {
          heading: 'Three Good Things',
          paragraphs: [
            "Among the specific practices that came out of Seligman's research, Three Good Things is the one most directly adjacent to the MyHGY Method. The practice is simple: each evening, write down three things that went well today, and for each, write a brief note about why it happened.",
            "In Seligman's research, a one-week version of this practice produced measurable increases in wellbeing and decreases in depressive symptoms for participants. The longer-term findings were more nuanced: sustained benefit was associated with participants who continued the practice after the study ended — not with the one-week intervention itself.",
            "The distinction matters. A single intervention introduces a pattern of attention; continuing the practice is what produces the cumulative shift. The proposed mechanism: repeated, deliberate attention toward what went well trains a habit that gradually changes the baseline from which a person experiences their days.",
          ],
        },
        {
          heading: 'The PERMA model and wellbeing',
          paragraphs: [
            "Seligman's broader research produced a framework for wellbeing he called PERMA: Positive emotion, Engagement, Relationships, Meaning, and Accomplishment. Each element contributes independently to a person's experience of a life going well — and each has its own levers.",
            "The Accomplishment strand is particularly relevant here: the act of noting and preserving what you actually did, what you saw through, what you contributed. Seligman's research provides scientific context for why attending to accomplishment — rather than merely hoping for it — changes a person's sense of their own capability over time.",
          ],
        },
        {
          heading: 'Learned optimism and explanatory style',
          paragraphs: [
            "Before positive psychology, Seligman's best-known work was on learned helplessness and its counterpart, learned optimism. His research demonstrated that the explanatory style through which a person interprets events has measurable effects on wellbeing, resilience, and performance.",
            "People who explain setbacks as permanent, pervasive, and personal are more vulnerable to helplessness. People who explain them as temporary, specific, and situational are more resilient — and this style, crucially, can be learned.",
            "How you close a day, and what you say to yourself about it, is a form of explanatory style. Treating a hard day as evidence of permanent incapacity is one choice. Treating it as a specific day with specific challenges — while also accounting for what was genuinely there — is another. The method provides structure for the second.",
          ],
        },
      ],
      connection: [
        "Seligman's work provides the scientific adjacency — evidence from controlled research — for what the MyHGY Method asks you to do. Three Good Things and the method are not the same practice, but they draw from overlapping territory: deliberate, structured attention to what was good in a day as a practice that, done consistently, changes how a person functions over time.",
        "The method is more specific than Three Good Things — it asks for evidence, not just notation; it has a defined sequence; it asks what you did, not just what went well. But the underlying logic about attention as a trainable function, and about the cumulative effect of that training on capability and wellbeing, runs through Seligman's body of research.",
      ],
    },
    {
      slug: 'james-clear',
      name: 'James Clear',
      role: 'Author',
      keyWork: 'Atomic Habits (2018)',
      previewDesc: "Small actions, repetition, identity, and how a system — not a single burst of motivation — is what actually builds change.",
      metaDesc: "James Clear's work on identity built through repeated small actions provides modern context for the MyHGY™ Method's emphasis on continuity.",
      intro: [
        "James Clear is an author whose work focuses on how repeated behavior, systems, environment, and identity interact over time. His 2018 book Atomic Habits translated a large body of behavioral thinking into a practical framework built around a simple proposition: meaningful change often emerges from actions small enough to repeat consistently.",
        "The importance of Clear's contribution is larger than the observation that small actions matter. His work provides an operating language for turning intention into repeated behavior — and for understanding why change that appears insignificant on a single day can become consequential when accumulated over time.",
      ],
      sections: [
        {
          heading: 'Systems, repetition, and the ordinary day',
          paragraphs: [
            "One of Clear's central distinctions is between goals and systems.",
            "A goal establishes a desired outcome. A system is the recurring process through which movement toward that outcome occurs.",
            "This matters because most of life happens between milestones. A person may decide where they want to go in a moment, but the direction becomes meaningful through what they repeatedly do afterward.",
            "Clear's work repeatedly brings attention back to this ordinary territory: the environment in which behavior occurs, the friction surrounding an action, the cues that make behavior more likely, and the repeated actions through which a process becomes part of everyday life.",
            "The result is a practical account of something personal development often overlooks. Understanding what to do and repeatedly doing it are different problems.",
          ],
        },
        {
          heading: 'Identity and accumulated evidence',
          paragraphs: [
            "Clear also connects repeated action to identity.",
            "Rather than treating identity as something established only through declaration, his framework emphasizes the relationship between repeated behavior and the picture a person develops of who they are.",
            "Each individual action may appear small. Across time, however, repeated actions create evidence.",
            "A person who repeatedly writes begins accumulating evidence of being someone who writes. A person who repeatedly trains accumulates evidence of being someone who trains. A person who repeatedly returns after interruption accumulates evidence of being someone who continues.",
            "The importance is not perfection. It is the accumulation.",
            "Behavior becomes personally meaningful because the record begins to say something about the person performing it.",
          ],
        },
        {
          heading: 'Small enough to continue',
          paragraphs: [
            "Another important contribution of Atomic Habits is its emphasis on reducing the size and friction of a behavior until repetition becomes realistic.",
            "Clear's Two-Minute Rule, environment design, habit tracking, and related tools all serve a similar purpose: make the desired behavior easier to begin and easier to repeat under ordinary conditions.",
            "This is an important distinction from relying on occasional motivation.",
            "A practice that works only on unusually motivated days has limited reach. A practice that can survive an ordinary Tuesday has the opportunity to become continuous.",
          ],
        },
      ],
      connection: [
        "James Clear's work provides important modern context for MyHGY's emphasis on persistent small practices, repetition, continuity, and returning after interruption.",
        "The MyHGY™ Method addresses a related problem from a different starting point. Valuable insight may occur in a book, course, conversation, coaching engagement, or moment of clarity. The question is what happens afterward.",
        "MyHGY asks the person to repeatedly return to present reality, constructive action, and lived evidence. The individual actions can be small. Their significance comes from repetition, preservation, and accumulation.",
        "Clear's work helps explain why a continuing system matters. MyHGY extends that logic into the territory of personal development by using repeated practice to preserve evidence of action, capability, connection, learning, recovery, and progress across ordinary life.",
      ],
    },
    {
      slug: 'bob-proctor',
      name: 'Bob Proctor',
      role: 'Personal-development teacher and author',
      keyWork: 'Paradigms · repetition · A/B/C goals',
      previewDesc: "Paradigms · repetition · A/B/C goals",
      metaDesc: "Bob Proctor's work on paradigms and the knowing–doing gap — and his influence on the founder — explains why MyHGY is built around continuous practice.",
      intro: [
        "Bob Proctor spent decades teaching a model of personal development centered on paradigms — deeply established patterns of thought and behavior that continue operating even after a person consciously decides they want something different.",
        "His work emphasized a problem that is easy to recognize: knowing something and living it are different achievements. A person can understand an idea intellectually and still continue behaving according to patterns established long before the new understanding arrived.",
        "For René Estripeaut, this body of thinking became particularly important through the Bob Proctor and Sandra Gallagher framework taught during the Quantum Growth program led by Lue Araujo through Boost Your Mind.",
      ],
      sections: [
        {
          heading: 'The knowing–doing gap',
          paragraphs: [
            "One of the most useful ideas in this tradition is the knowing–doing gap.",
            "Human beings frequently know far more than they consistently apply.",
            "They may know that exercise matters, know what conversation needs to happen, know which behavior would serve them better, know how they want to respond, or understand an important lesson from a book or course.",
            "Understanding creates possibility. Application creates experience.",
            "The distance between the two is where much of personal development is won or lost.",
            "Proctor's work repeatedly emphasized that intellectual understanding alone does not automatically replace an established way of operating. The new idea has to enter lived behavior.",
          ],
        },
        {
          heading: 'Paradigms and repetition',
          paragraphs: [
            "Within the Proctor framework, a paradigm is an established pattern that influences perception, emotion, decisions, and behavior beneath ordinary conscious intention.",
            "The practical implication is significant.",
            "A new idea may be understood immediately while an established pattern has years of repetition behind it.",
            "Changing direction therefore requires more than hearing the new idea once. The person repeatedly returns to the new understanding and repeatedly acts from it until lived experience begins supporting a different way of operating.",
            "This is the part of Proctor's work that became especially consequential in René's own development.",
            "The lesson was not simply to think differently. It was to repeatedly practice differently.",
            "Over time, repeated action produced evidence: sobriety, physical training, reading, difficult goals, accountability, daily practices, returning after interruption, and commitments carried forward.",
            "The evidence gradually became harder for an older self-story to dismiss.",
          ],
        },
        {
          heading: 'Goals that require growth',
          paragraphs: [
            "The A/B/C goal framework provided another important idea.",
            "An A-type goal is already within familiar capability. A B-type goal requires stretching beyond the current position while the route remains reasonably understandable. A C-type goal reaches into territory where the path is not yet known.",
            "The value of the C-type goal is what it requires from the person pursuing it.",
            "The destination creates direction before the entire route is visible. Movement then requires action, learning, adjustment, persistence, and a willingness to continue without complete certainty.",
            "For René, this idea became a practical way of approaching challenges that previously would have appeared too large to begin.",
          ],
        },
      ],
      connection: [
        "Bob Proctor's influence on MyHGY is most important at the point where insight becomes practice.",
        "The MyHGY™ Method is built around the recognition that understanding something once rarely gives a new way of living enough repetition to compete with established patterns.",
        "Its governing mechanism is therefore continuous practice.",
        "Insight introduces a possibility. Repetition keeps the possibility alive. Action generates lived evidence. Preserved evidence accumulates. Visibility allows that accumulated evidence to influence the story a person holds about themselves.",
        "This is where Proctor's influence and MyHGY's independent development meet.",
        "Proctor's framework helped René understand why repetition mattered. René's subsequent lived practice — and eventually MyHGY and MyDopa — developed around making that repetition easier to continue while preserving and making visible the evidence it generates.",
        "MyHGY does not claim that repetition is the only way human beings change, nor does it present popular-psychology descriptions of the subconscious as settled neuroscience. The contribution here is practical: a new understanding needs repeated application if it is going to have a meaningful opportunity to become part of ordinary life.",
      ],
      disclaimer: "Bob Proctor is cited here solely for his intellectual contributions and for his influence through the framework René encountered in his own personal-development work. HaveAGreatYesterday.com, the MyHGY™ Method, and MyDopa™ are not affiliated with, sponsored by, certified by, or endorsed by Bob Proctor, Sandra Gallagher, their organizations, Lue Araujo, or Boost Your Mind. This recognition does not imply any relationship, collaboration, or endorsement.",
    },
  ]

  function findEntry(slug: string): HallOfFameEntry | null {
    return entries.find(e => e.slug === slug) ?? null
  }

  return { entries, findEntry }
}
