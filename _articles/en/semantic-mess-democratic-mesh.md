---
layout: article
volume-uid: wilder-journal-2
category: learnings
published: true
date: 2026-05-25T20:27:00.000+02:00
date-updated: 2026-05-25T20:27:00.000+02:00
article-order: 20
uid: Semantic-Mess-Democratic-Mesh
title: "From Semantic Mess to Democratic Mesh: facilitation accompanying data. A
  conversation with Diego Arredondo Ortiz"
description: Diego Arredondo Ortiz has spent more than a decade moving between
  grassroots assemblies, civic technology, political organizing, and
  interdisciplinary research.
author: Nadia Nadesan & Olivier Schulbaum
author_uids:
  - nadia-nadesan
  - olivier-schulbaum
interviewee: null
cover:
  path: /media/articles/heroes/photo_2026-05-26_09-24-26.jpg
  mobile: /media/articles/mobile/photo_2026-05-26_09-24-26.jpg
  thumbnail: /media/articles/thumbnails/photo_2026-05-26_09-24-26.jpg
related_article_uids:
  - AI-dialogue
  - chayn-feminism-technology
stickers:
  layout: layout-none
  sticker_one_animation: animation-none
  sticker_two_animation: animation-none
call_to_action: cta-donate
image:
  path: /media/articles/social/photo_2026-05-26_09-24-26.jpg
---
Diego Arredondo Ortiz has spent more than a decade moving between grassroots assemblies, civic technology, political organizing, and interdisciplinary research. His trajectory began in Mexico through networked assemblies and the experience of Wiki Partido and Wiki Política, where experimental forms of democratic organization unexpectedly reached institutional politics through a successful local election campaign. Later, his work shifted increasingly toward academia, digital methods, and data visualization, while maintaining a close relationship with questions of collective organization and democratic participation.

To facilitate, in Diego’s world, is not simply to moderate a meeting or administer a platform. It is to care for the relational, emotional, and infrastructural conditions that allow participation to happen across fragmented realities, both online and offline. Facilitation, in Diego’s world, is less about managing participation than accompanying voices, tensions, and unfinished ideas as they move across platforms, assemblies, and infrastructures. It means walking alongside processes rather than directing them from above, paying attention to those who cannot, do not want to, or simply will never enter digital systems, and finding ways for their ideas to travel anyway.

# **Taking Ideas Online, Not Bodies**

“At some point we will have to relinquish the effort of taking people online and instead focus on taking their ideas online.” 

One of Diego’s strongest insights is that there will always be people who do not enter “the digital,” whether because of access, interest, cultural distance, literacy, or deliberate choice. In rural communities in Jalisco, he recalls how even asking participants for an email address could become an obstacle. In such contexts, the platform metaphor itself often carries little meaning. Rather than treating this as a failure to be corrected, Diego proposes relinquishing the ambition of bringing everybody online. The objective, instead, becomes taking ideas online, not bodies.

This requires hybrid infrastructures of translation. “We cannot allow what happens on the platform and what happens in physical spaces to become disconnected processes.” Proposal forms from participatory platforms like Decidim may exist simultaneously on paper. Spoken testimonies may be transcribed through audio recording systems. Handwritten notes can enter digital archives through Optical Character Recognition models (OCR), that can read and digitize handwritten notes, scanned pages, and photographed documents. In some assemblies, microphones are activated only at agreed moments, allowing participants to negotiate consent around recording and transcription collectively. Facilitation, in this context, becomes the work of moving ideas across media while respecting the uneven realities through which participation happens. 

The question is not simply how to digitize participation, but how to accompany different forms of presence without forcing them into a single channel. Some participants may never appear on the screen. Others may remain active only through neighbors, facilitators, recordings, or translated summaries. Participation therefore becomes distributed across people, infrastructures, and acts of mediation rather than confined to direct platform interaction alone.

Throughout these experiences, Diego became interested in detecting emergent structures of meaning. At first, this emerged through network analysis and social media visualization projects at [Signa_Lab ITESO](https://signalab.mx/) in Guadalajara. Large network graphs could reveal who was connected to whom, who amplified which hashtag, or how polarized publics clustered around political events. Yet something remained unresolved. The visualizations were often “big” and “pretty,” but frustratingly thin when it came to meaning itself. One could see interaction, but not necessarily understand what was actually being said.

This frustration pushed him toward embeddings and topic modelling, not as neutral technical solutions, but as tools capable of navigating what he calls the “collective semantic mess” produced by participation. Using Python, BERTopic, and interactive systems such as Cosmos WebGL, Diego began experimenting with ways of flattening the ontological hierarchies. Rather than forcing contributions into predefined administrative categories, these systems attempt to surface emergent thematic proximities, allowing ideas, concerns, affects, and conflicts to cluster through semantic affinity rather than institutional design. 

{% quote %}“What interests me about this technique is to flatten everything and see what emerges within the semantic space.”{% endquote %}

As grassroots participation becomes institutionalized across platforms and years of accumulated civic data, questions of orientation and facilitation move increasingly to the center of democratic practice.

# **Embeddings as Tools for Facilitation**

Diego’s turn to embeddings emerges precisely from that facilitation problem: how to move between the intensity of on‑the‑ground militancy and the abstraction of large‑scale network analysis without losing people along the way. Traditional visualisations gave him beautiful maps of Twitter interactions, yet they were short on interpretability. For Diego, embeddings offer one possible way of navigating this complexity by positioning proposals, comments, and ideas according to their semantic proximity to one another. This makes it possible to temporarily flatten institutional hierarchies and observe what themes, tensions, and collective concerns begin to emerge across the participatory landscape.

For facilitators, this matters because it changes what can be brought back to the room. Instead of reporting only on “who is central” in a network, one can return with clusters of ideas, recurring concerns, and resonant phrases that stretch across platforms and moments. In hybrid processes, where digital threads, physical meetings, messaging groups, and corridor conversations form a shifting assemblage of bodies, tools, and norms (Deleuze & Guattari, 1987), embeddings can help trace connections that are otherwise invisible to any single participant. Yet Diego is careful: these maps never replace situated reading or facilitation; they are prompts, not verdicts.

It is precisely through this lens that Diego approached more than eight years of participatory activity on Decidim Barcelona. Applying semantic clustering techniques to more than 31,000 citizen proposals submitted between 2016 and 2024, he used BERTopic together with a Catalan fine tuned language model to surface twenty recurring thematic constellations cutting across different participatory cycles, from the early effervescence surrounding the Municipal Action Plan to the participatory budgeting processes that intensified during and after the pandemic.

Certain themes returned persistently regardless of format, institutional cycle, or consultation type. Housing, bike lanes, public transportation, public space, and animal welfare repeatedly reappeared across the semantic landscape of the platform. What emerged was not simply a collection of isolated demands, but a longer civic rhythm through which the city continuously negotiates mobility, affordability, care, coexistence, and ecological transition.

In this sense, **the platform begins to resemble less a repository of proposals and more a semantic mirror of Barcelona’s urban metabolism**. Participation does not appear as a sequence of disconnected consultations, but as an ongoing process through which urban publics repeatedly articulate unresolved tensions around space, infrastructure, visibility, and everyday life.

{% gallery { "simple": false, "images": [{"path":"/media/captura-de-pantalla-2026-05-25-a-las-20.30.50.png","alt":"Analysis of over 31,000 citizen proposals submitted to decidim.barcelona between 2016 and 2024","caption":"Analysis of over 31,000 citizen proposals submitted to decidim.barcelona between 2016 and 2024","credits":"Diego Arredondo Ortiz"}] } %}

The recurrence of themes such as housing and mobility also reveals how digital participation platforms become entangled with the political geography of the city itself. Bike lanes are not simply transportation proposals. They are negotiations over street space, environmental transition, accessibility, tourism, and competing imaginaries of urban movement. Animal welfare debates similarly point toward moral and affective geographies embedded within parks, neighborhoods, domestic life, and public space.

What interests Diego is precisely this capacity to move between scales. To flatten thousands of proposals into a shared semantic terrain while still allowing patterns, frictions, and civic obsessions to emerge collectively over time.

{% quote %}“To place everything on equal ground and let the weight people gave to each issue emerge from there.”{% endquote %}

What Diego describes technically as “flattening ontological hierarchies” appears in this conversation in more situated terms. In both formulations, the objective is similar. To **move away from rigid institutional taxonomies and toward semantic constellations capable of revealing patterns that emerge collectively from participation itself**. Embeddings become important here because they allow texts, images, sounds, and multimodal materials to coexist within the same latent semantic space. Ideas appear close together not because a moderator manually categorized them, but because patterns emerge through relationships within the data itself.

For Diego, this changes what can be brought back into collective discussion. Instead of only showing who occupies central positions in a network, facilitators can return with recurring concerns, resonant phrases, thematic clusters, and unexpected conceptual bridges that cut across meetings, platforms, neighborhoods, and moments in time.

{% quote %}“We should not delegate the production of meaning to the machine.”{% endquote %}

Yet these systems are never neutral mirrors. Diego repeatedly insists that topic modelling and semantic clustering involve political choices at every level. Working with pre-trained models always means inheriting decisions made elsewhere about training data, linguistic norms, licenses, and worldviews. His preference for public digital infrastructure models, such as those developed by the Barcelona Supercomputing Center, reflects a broader concern with sovereignty, transparency, and collective ownership of technological infrastructures. Using a Catalan fine tuned model, for instance, becomes more than a technical optimization. It becomes part of a larger effort to preserve cultural specificity and linguistic plurality within computational systems.

# **Shadows of Participation**

Diego’s reflections on semantic clustering also reveal another layer of exclusion. Using BERTopic together with stricter clustering methods such as HDBScan, many proposals remain outside stable semantic groupings. These outliers may appear as statistical noise, but they may also reveal marginal experiences, isolated demands, or forms of expression that fail to repeat frequently enough to become computationally legible.

Rather than dismissing these residual spaces, Diego suggests they may constitute shadows of participation. Traces of communities, experiences, territories, or political languages that remain structurally difficult to classify. In the absence of voluntarily shared sociodemographic data, exclusion often becomes visible only indirectly, through territorial patterns, interaction networks, or semantic absences. Certain neighborhoods repeatedly remain at the margins of participation datasets. Certain forms of speech appear disconnected from dominant thematic clusters. Some proposals circulate briefly before disappearing into what algorithms classify as irrelevance.

This becomes especially important because semantic modelling itself can be politically manipulated. Diego warns that topic analysis can easily become a mechanism for semantic sanitization when conducted behind closed doors. One can continue adjusting clustering parameters until conflictive or politically inconvenient topics dissolve into broader, more acceptable categories. As he describes it, it becomes possible to keep “spinning the roulette wheel” until the resulting map appears politically harmless.

For this reason, he insists on transparency, replicability, and collective scrutiny of methodological decisions. The political question is not only whether AI systems function accurately, but who gets to decide what counts as coherence, relevance, noise, or consensus.

# **Designing Assemblages, Not Just Platforms**

Participation, for Diego, is never reducible to a platform. It is an assemblage composed of meetings, interfaces, memories, chats, facilitators, infrastructures, recordings, silences, institutions, bodies, and conflicts that constantly reconfigure each other. Inclusive facilitation therefore means moving between layers, translating offline discussions into online records while also summarizing digital debates back into forms that make sense in physical spaces. It means noticing who disappears in each layer. The neighbor is active in WhatsApp but absent from the platform. The participant who speaks in assemblies but never appears in datasets. The themes that become statistically marginal despite carrying deep political urgency.

His interest in visualization follows the same logic. Diego is less concerned with spectacular dashboards than with creating representations where people can recognize themselves. Maps where participants identify their own neighborhoods. Thematic constellations that surface struggles already familiar to communities. Semantic visualizations that feel intuitive rather than alienating. Facilitation, here, involves curating how these representations return to collective discussion, rather than assuming that projecting a graph onto a wall automatically democratizes interpretation.

# **Textual Democracy and Multimodal Expression**

Underlying many of Diego’s observations is a critique of text centric democratic infrastructures themselves. Interfaces, proposal systems, linguistic norms, and platform architectures privilege certain forms of literacy while excluding others. Migrants, multilingual communities, people with lower levels of formal education, and participants accustomed to oral or performative cultures often encounter barriers long before entering political disagreement itself. The issue is not simply digital access. It is access to the expressive grammar embedded within participation systems.

For this reason, Diego aligns with Platoniq's practices of developing forms of participation where citizen languages such as theatre, poetry, oral testimony, drawing, or physical visualization coexist alongside the technical architecture of digital democracy systems. These forms would not merely illustrate proposals after the fact. They would become part of the proposal itself, functioning as enriched annexes capable of carrying experiences that administrative text alone cannot fully capture.

In this sense, his reflections resonate strongly with the arts based and multimodal participation approaches explored throughout the INSPIRE project and with Platoniq’s research into political user experience (PUX). Participation is not only a question of interface usability. It is also a question of whether democratic systems are capable of recognizing multiple ways of expressing political experience.

# **Choosing Infrastructures as a Facilitation Act**

Another layer of facilitation in Diego’s work lies in choosing the infrastructures through which participation is processed. Working with pre-trained models always means inheriting someone else’s decisions about data, licenses, and agendas. For him, selecting public or collectively developed models rather than opaque corporate APIs becomes part of a broader commitment to sovereignty and shared interpretability.

This choice is not purely technical. It shapes who can audit the system, how results can be explained in assemblies, and whether communities might eventually appropriate the tools themselves. In this sense, deciding between infrastructures becomes a facilitation act because it affects trust, legibility, and the distribution of interpretive power.

At the same time, Diego remains cautious about the extractive logic surrounding data itself. Rather than endlessly accelerating toward more capture, more monitoring, and more accumulation, he is increasingly interested in revisiting existing archives. Historical records, memory collections, and declassified documents of repression in Latin America become spaces where AI assisted analysis might help communities reflect collectively on unresolved histories. The question shifts from capturing more data to reinterpreting inherited traces through more accountable forms of technological mediation.

# **Facilitating Across Time**

Underlying all this is a broader reflection on time. After years of intense militancy and political organizing, Diego describes returning to study as an opportunity to slow down and collectively process what happened across long trajectories of experimentation. AI systems, embeddings, visualizations, and archives become ways of facilitating delayed conversations with the past.

In this temporal sense, facilitation extends far beyond individual workshops or consultation cycles. It involves caring for the conditions that allow participation to remain legible and revisitable over time. Cleaning datasets. Publishing notebooks. Documenting methodological choices. Negotiating consent around recordings. Leaving behind traces that others can reinterpret later.

{% quote %} “Not always looking forward to capturing more and more data, but stopping for a moment and looking back at the past.”{% endquote %}

Participation, from Diego’s perspective, is sustained not only through interface design, but through the continuous labor of translation, maintenance, accountability, and collective reflection across the uneven terrain between analogue life and digital representation.

Between semantic mess and democratic mesh, a tension remains unresolved. What happens to the people, experiences, and political languages that never stabilize into a recognizable cluster, yet continue insisting on being heard?

*This article forms part of the* INSPIRE Project*, a Horizon Europe research initiative exploring intersectional inclusion, democratic participation, and participatory infrastructures across digital and physical spaces. Readers interested in the broader research context can explore the report* *Exploring the Intersection of* [*E-Democracy Platforms, Urban Development Models, and Political Cultures* *(June 2025)*](https://www.inspiredemocracy.eu/_files/ugd/a49cde_afb9ec9dba0e420cb86219ea7cec2b38.pdf)*, which offers a conceptual foundation for understanding digital participation platforms as civic infrastructures shaped by political cultures, urban assemblages, and spatial logics.*

### **References**

Segato, R. L. (2016). *La guerra contra las mujeres*. Traficantes de Sueños.

Deleuze, G., & Guattari, F. (1987). *A Thousand Plateaus: Capitalism and Schizophrenia*. University of Minnesota Press.
