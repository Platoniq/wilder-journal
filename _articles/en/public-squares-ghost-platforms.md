---
layout: article
volume-uid: wilder-journal-2
category: deep-dives
published: true
date: 2026-05-27T12:29:00.000+02:00
date-updated: 2026-05-27T12:29:00.000+02:00
article-order: 9
uid: Public-Squares-Ghost-Platforms
title: Public Squares, Ghost Platforms and the Smell of Digital Democracy
description: Every public square has its own atmosphere, its own mixture of
  smells, sounds, and rhythms.
author: Nadia Nadessan & Olivier Schulbaum
cover:
  path: /media/articles/heroes/captura-de-pantalla-2026-05-27-a-las-12.27.27.png
  mobile: /assets/media/no_image-hero.png
  thumbnail: /assets/media/no_image-thumbnail.png
stickers:
  layout: layout-none
  sticker_one_animation: animation-none
  sticker_two_animation: animation-none
call_to_action: cta-contact
image:
  path: /assets/media/no_image-social_media.png
---
Public Squares, Ghost Platforms and the Smell of Digital Democracy

by Nadia Nadesan & Olivier Schulbaum



Every public square has its own atmosphere, its own mixture of smells, sounds, and rhythms. Some “plazas” smell of coffee and cigarette smoke at seven in the morning, when municipal workers, café owners, and old neighbours exchange gossip before the day begins. Others carry the scent of fried food, sea salt, wet stone after summer rain, or bread arriving from nearby bakeries. In certain places, traces of bureaucracy linger in the air: printer ink, paper archives, overheated municipal offices, the hum of fluorescent lights. Elsewhere, the square fills with the energy of protest and celebration: drums, spray paint, fireworks, sweat, music, children running between demonstrations and market stalls.

Urbanists rarely speak about these sensory dimensions of infrastructure, yet anyone who has lived through different cities, or different crises, understands them instinctively. Public spaces are never neutral. They accumulate habits, tensions, rituals, and forms of coexistence. Some squares invite lingering conversations and collective imagination. Others silently communicate that people should move along, remain quiet, or leave decisions to experts. Some squares feel collectively owned. Others feel surveilled.

Digital democratic infrastructures are no different.

Platforms like Decidim also carry smells; metaphorically speaking. They inherit political cultures, administrative rhythms, institutional anxieties, and assumptions about who participation is for. Their interfaces may look clean and universal, but beneath the buttons and assemblies lie invisible urban genealogies: Barcelona municipalism, Brazilian federalism, Swiss planning cultures, activist histories, bureaucratic traditions, even regional attitudes toward conflict and consensus.

This became strikingly clear in two very different conversations at DecidimFest this year. One came from Brazil, where Leonardo Mitchalski and the Brasil Participativo ecosystem are building something audacious: a public democratic infrastructure capable of scaling across thousands of municipalities. The other emerged from Switzerland, where Lars Kaiser reflects on a Decidim platform that was technically ready within days after a catastrophic landslide destroyed the town of Blatten, yet never actually became politically alive.

Brazil: Paving the Digital Commons

Leonardo describes his mission in simple terms: infrastructure is there to “make other people’s lives easier.” Leonardo speaks about infrastructure almost like a street engineer speaks about paving roads: the goal is to make movement smoother for others. In Brazil, this means simplifying the deployment of Decidim so dramatically that municipalities no longer need armies of specialised engineers just to get started. The team compresses what used to be a tangled “letter soup” of databases, dependencies, and configurations into near one-click deployments. The political ambition hiding underneath this technical simplification is enormous.

Because when participation infrastructure is too complicated, democracy itself becomes unevenly distributed. Wealthier institutions can afford expert teams; poorer municipalities cannot. Some cities get beautifully maintained civic spaces while others inherit abandoned digital ruins. Technical friction becomes political exclusion.





Picture by Gloria Mendoza Better Images of AI / CC BY 4.0 www.gloriamc.xyz

From “letter soup” to one‑click deployments in Brasil

Installing Decidim typically requires a series of steps, setting up Redis, Postgres, and other components that Leonardo jokingly calls “letter soup.” The Brazilian SaaS stack compresses these into a single command that installs all dependencies at once, turning what was a multi‑step, error‑prone process into something more approachable for administrators and new contributors.  

On top of this, they have built a small web application that lets a system administrator spin up a new Decidim instance for a city or state through a browser interface. The workflow is straightforward: download the project, run a command to install the web app on Kubernetes, run another command to expose it, and then configure organisations via a user‑friendly interface. Some customisations still need to be done manually by an admin, but there is ongoing work to pre‑fill part of that setup so that local governments can get from “idea” to “live participatory platform” far more quickly.  Right now, eleven municipalities are lined up for beta testing, with the potential to scale to around 5,000 municipalities and states

This is exactly the kind of accessibility and iteration Platoniq’s Safe(r) Spaces Playbook calls for: hiding unnecessary complexity, documenting opinionated choices, and leaving room for adaptation to different contexts, rather than assuming one perfect configuration. It acknowledges that what works for Brazil might not apply everywhere, but offers an opinionated template that others can study, fork, and adjust.   



Brazil’s answer is not only open source software, but infrastructural hospitality. Their ecosystem; built through public cloud infrastructure and portable Kubernetes architecture, tries to ensure that democratic tools can travel. A municipality should not become dependent on a single vendor, consultancy, or charismatic technical expert. Participation infrastructure should behave more like a shared public utility than a luxury product.

It is a fascinating inversion of how many governments still approach civic tech. Usually, digital participation arrives as a polished interface sold through procurement logic: a platform as a product. But Leonardo’s approach treats infrastructure itself as a commons. The important thing is not only the visible square where participation happens, but the hidden plumbing that allows the square to remain open, maintained, and collectively owned. And perhaps that is where the smell metaphor becomes useful again.

Some digital infrastructures smell proprietary. Closed doors. Expensive maintenance contracts. Dependency. Others smell experimental and precarious: abandoned GitHub repositories, activist exhaustion, volunteer burnout. The Brazilian project smells different. It smells institutional; but in a surprisingly hopeful sense: like a public kitchen trying to feed many people with limited resources while keeping the recipe open for others to adapt.

When asked why this work matters, Leonardo points to developing countries, where there are not “so many highly skilled software engineers” and where the benefits of easy‑to‑use, well‑documented tools can be enormous for institutions and communities. For him, each piece of documentation, each automation that makes maintenance less about panic and more about calm root‑cause analysis, is part of making participation infrastructures more inclusive.   

Overload, “vultures,” and political paralysis

Platforms like Decidim are often imagined as democratic Swiss Army knives: modular tools that can unfold differently depending on the situation. Assemblies, proposals, debates, accountability mechanisms: each feature promises adaptability. In Blatten, Switzerland, Lars Kaiser and his team encountered the opposite dilemma.

When a massive rockfall erased the Swiss town in 2025, residents were suddenly dispersed across the valley. Families moved into temporary flats, spare bedrooms, and relatives’ homes while the country debated whether rebuilding the town even made sense.

Lars’s team rapidly configured a Decidim platform to help keep the displaced community connected. Within two days, the infrastructure existed. Residents supported it. Officials expressed interest. The platform was ready.

Yet it never truly launched.



Aerial view of the Swiss village of Blatten one day after the massive avalanche triggered by the collapse of the Birch Glacier. Michael Buholzer (AP/LaPresse)

Alongside solidarity and donations, the disaster attracted a rush of external actors: planning offices, architects, and investors arriving with offers to “help” that were often also bids for lucrative projects. One person involved described these actors as “vultures preying on the people in the valley,” capturing the sense that the influx of money and proposals was as threatening as it was supportive 

For local councils, already managing emergency logistics and long‑term uncertainty, this created administrative overload and deep mistrust. A concept for an online‑offline meeting place, including the Decidim platform, was drafted and even approved by the valley council, but implementation “got bogged down in some administrative quagmire.” Residents were ready; the platform was ready, but the link was never officially shared 

In Valais, maintaining social contact and cohesion after the catastrophe was treated as a “soft” concern and therefore not prioritised amid the flood of “hard” tasks, although, for a dispersed community, relational infrastructure is a precondition for any meaningful reconstruction debate 

Not because the software failed. Not because people rejected participation. But because the administration entered a state familiar to many crisis territories: cognitive overload. Emergency logistics, reconstruction pressures, media attention, opportunistic investors, political uncertainty: all collided simultaneously.

And under these conditions, maintaining social connection became classified as “soft.” Optional. Secondary. But anyone who has experienced catastrophe knows the opposite is true.

After a disaster, social cohesion is not decoration. It is infrastructure.

Without spaces where people can remain connected, argue, grieve, remember, and imagine futures together, reconstruction becomes purely technical. Roads get rebuilt. Houses return. But the public square disappears.



Subversive participation, not plug‑and‑play methods

Lars Kaiser comes from a background in spatial planning in Switzerland, where participation is often tied to planning law and urban transformations rather than grand constitutional debates. He describes UrbanEquip’s mission as the “democratisation of urban development,” with a focus on projects that are both fun and capable of having a real impact on who shapes cities and towns. That mix of playfulness, income, and structural effect sits uneasily in a disaster context where administrations instinctively strip out anything that looks like experimentation or emotion.

What Lars Kaiser understands, perhaps because of his work in urban games and conflict-based participation, is that democratic spaces cannot be designed around fantasies of permanent collaboration. Cities are full of conflicting incentives. Residents, developers, politicians, investors, planners: they rarely want the same thing. Pretending otherwise produces sterile participation rituals that collapse under real pressure. 

Seen this way, the ghost platform of Blatten becomes deeply revealing.

The problem was never the absence of technology. The infrastructure existed. The deeper issue was that the surrounding institutional ecosystem no longer had the emotional bandwidth to host democratic space itself. The square had been built, but no one could keep the lights on socially or politically.

It also reveals that social cohesion is not a secondary or “soft” concern after catastrophe. For dispersed communities, maintaining connection, trust, and collective discussion is part of the essential infrastructure of recovery, just as important as housing, logistics, or engineering.

And this may be one of the central questions for the future of digital democracy.

Not whether platforms can scale technically. Not whether interfaces look modern. Not even whether participation rates increase.

But whether societies know how to treat democratic infrastructures as essential infrastructures; especially during moments of urgency.

Because public squares are strange things. Their value often becomes visible only once they disappear.

You notice it after floods, blackouts, displacement, political collapse, or forced isolation. Suddenly what mattered was never only the pavement or benches themselves, but the possibility of encountering others repeatedly across differences. Of seeing conflict before it hardens into abstraction. Of maintaining some shared rhythm of collective life.

Digital democratic infrastructures are beginning to inherit this role.

Some will resemble giant federal transit systems, like the Brazilian ecosystem. Others may remain fragile temporary shelters, like the unrealised platform in Blatten. Some will smell like bureaucracy; others like activism; others like mutual aid kitchens assembled during emergencies.

Both experiences highlight how participation platforms are perceived politically. In highly fragile contexts flooded by consultants, investors, and external actors, Decidim risks being seen as just another service offer unless it is clearly rooted in public value, local trust, and long-term democratic commitment.

But perhaps the most important lesson from both stories is this:

Platforms are not simply tools we use to organise democracy. They are places.

And like all places, they require maintenance not only of servers and interfaces, but of trust, attention, conflict, memory, and collective presence.

At DecidimFest, this work sat at the intersection of code, care, and politics. It reminds us that safer digital spaces do not appear only in moderation policies or community guidelines, but in every choice that makes it easier for the next municipality, the next student, or the next civil servant to join, learn, and maintain the digital commons we depend on.

This article forms part of the INSPIRE Project, a Horizon Europe research initiative exploring intersectional inclusion, democratic participation, and participatory infrastructures across digital and physical spaces. Readers interested in the broader research context can explore the report Exploring the Intersection of E-Democracy Platforms, Urban Development Models, and Political Cultures (June 2025), which offers a conceptual foundation for understanding digital participation platforms as civic infrastructures shaped by political cultures, urban assemblages, and spatial logics.





Original Interview with Leonardo Mitchalski ONLY FOR REFERENCE

DecidimFest made something very clear this year: the future of digital democracy will depend not only on what platforms we use, but on how we build, host, and share them. In Brazil, the team behind Brasil Participativo is taking this seriously by open‑sourcing a Software‑as‑a‑Service (SaaS) ecosystem for Decidim that aims to make high‑quality democratic infrastructure both scalable and accessible to thousands of public institutions. Leonardo’s work at Lab Livre and Brazil Participativo shows how “paving the path” for others is a deeply political act, not just a technical one.

Making infrastructure a public good

Leonardo describes his mission in simple terms: infrastructure is there to “make other people’s lives easier.” In practice, this means taking a complex stack (Kubernetes, databases, data pipelines) and turning it into something reproducible, faster, and less fragile for the many engineering students and staff who have to work with it. If infrastructure is sluggish or outdated, “all work will also be a little bit sluggish,” so his focus is on speed, stability, and reuse.  

This resonates strongly with the INSPIRE’s Safer Spaces Playbook’s insistence that digital infrastructures are never neutral, but encode power through ownership, accessibility, and ease of use. When a public administration can deploy Decidim only by relying on scarce, overburdened experts, its democratic promise is fragile. By contrast, a well‑documented, open‑sourced SaaS stack transforms infrastructure into something closer to a public good: widely deployable, easier to maintain, and shareable across municipalities, states, and institutions.   

Open‑sourcing a scalable Decidim SaaS

The Brazilian team is building a Decidim‑as‑a‑service platform hosted by Dataprev, a public company that provides cloud services comparable to AWS or GCP but within a public mandate. Right now, eleven municipalities are lined up for beta testing, with the potential to scale to around 5,000 municipalities and states. Designing for that scale from the outset is not just an engineering challenge; it is a governance decision about who should be able to access robust democratic tools and under what conditions.   

To keep this ecosystem portable and sovereign, the team has chosen Kubernetes as its backbone. Kubernetes allows them to run on different clouds or even on their own servers and, crucially, to move away from a provider if needed, avoiding vendor lock‑in. In the language of the Playbook, this is a form of autonomy: the platform’s political commitments are less constrained by private cloud terms of service or sudden business decisions, and more anchored in public control and accountable governance.

From “letter soup” to one‑click deployments

One of the clearest examples of “paving the path” is how the team has simplified deployment. Installing Decidim typically requires a series of steps, setting up Redis, Postgres, and other components that Leonardo jokingly calls “letter soup.” The Brazilian SaaS stack compresses these into a single command that installs all dependencies at once, turning what was a multi‑step, error‑prone process into something more approachable for administrators and new contributors.  

On top of this, they have built a small web application that lets a system administrator spin up a new Decidim instance for a city or state through a browser interface. The workflow is straightforward: download the project, run a command to install the web app on Kubernetes, run another command to expose it, and then configure organisations via a user‑friendly interface. Some customisations still need to be done manually by an admin, but there is ongoing work to pre‑fill part of that setup so that local governments can get from “idea” to “live participatory platform” far more quickly.  

This is exactly the kind of accessibility and iteration the Safer Spaces Playbook calls for: hiding unnecessary complexity, documenting opinionated choices, and leaving room for adaptation to different contexts, rather than assuming one perfect configuration. It acknowledges that what works for Brazil might not apply everywhere, but offers an opinionated template that others can study, fork, and adjust.   

Building safer, braver data infrastructures

Behind the scenes, the SaaS system is also building a coherent data layer. When a new organisation is created via the web app, the platform prepares pipelines that fetch participation data, processes, votes, and more, and consolidates it into a single place. This data is then available for internal teams in the presidency, municipalities, and states, and, in some cases, for public dashboards.  

The team uses Airflow to orchestrate data ingestion and Metabase to visualise it, initially for Brasil Participativo and progressively for the new SaaS product so that users can simply “choose the state or municipality” and explore the data. The INSPIRE Safer Spaces Playbook emphasises safer data practices and the “paradox of equality data and privacy”: data is necessary to understand participation and inequity, but can also expose people to harm if mishandled. By building transparent pipelines and reusable, public‑interest dashboards, the Brazilian project nudges data from being a hidden back‑office asset toward being part of a shared democratic capability, while still requiring careful governance of what is published, for whom, and under what protections.

Safer spaces through paved paths

When asked why this work matters, Leonardo points to developing countries, where there are not “so many highly skilled software engineers” and where the benefits of easy‑to‑use, well‑documented tools can be enormous for institutions and communities. For him, each piece of documentation, each automation that makes maintenance less about panic and more about calm root‑cause analysis, is part of making participation infrastructures more inclusive.   

At DecidimFest, this work sits at the intersection of code, care, and politics. It reminds us that safer digital spaces do not appear only in moderation policies or community guidelines, but in every choice that makes it easier for the next municipality, the next student, or the next civil servant to join, learn, and maintain the digital commons we depend on.





interview with lars kaiser ONLY FOR REFERENCE

Using Decidim to rebuild a town after a natural disaster reveals both the promise and the limits of digital democracy when institutions are in shock and when power, grief, and opportunism collide.    

A vanished town, a ready platform

In May 2025, a massive rockfall in Switzerland’s Valais region obliterated the town of Blatten, forcing residents to evacuate and scatter across the valley. Overnight, a close‑knit community was replaced by a diaspora of neighbours staying with relatives, in spare flats, or in temporary housing, while Switzerland debated in public whether Blatten should even be rebuilt 

This disaster hit a place already engaged in a long‑term planning process: since 2024, the planning office Planval had been working with four municipalities in the valley on how to organise their future amid demographic and economic pressures typical of remote mountain towns. When Blatten disappeared, that strategic exercise suddenly became existential 

At this point, the administration approached UrbanEquip, one of the Decidim partners, to explore whether a Decidim instance could help keep this dispersed community connected and involved in decisions about the town’s future. Within two days, using a hosted Decidim‑based product, a platform was configured and presented at the next in‑person workshop; residents and local authorities expressed strong support and agreed to pursue political approval to launch it 

Yet the platform never went live. 

Overload, “vultures,” and political paralysis

Alongside solidarity and donations, the disaster attracted a rush of external actors: planning offices, architects, and investors arriving with offers to “help” that were often also bids for lucrative projects. One person involved described these actors as “vultures preying on the people in the valley,” capturing the sense that the influx of money and proposals was as threatening as it was supportive 

For local councils, already managing emergency logistics and long‑term uncertainty, this created administrative overload and deep mistrust. A concept for an online‑offline meeting place, including the Decidim platform, was drafted and even approved by the valley council, but implementation “got bogged down in some administrative quagmire.” Residents were ready; the platform was ready, but the link was never officially shared 

In Valais, maintaining social contact and cohesion after the catastrophe was treated as a “soft” concern and therefore not prioritised amid the flood of “hard” tasks, although, for a dispersed community, relational infrastructure is a precondition for any meaningful reconstruction debate 

Lars’ practice: subversive participation, not plug‑and‑play methods

Lars Kaiser, the UrbanEquip practitioner involved in the case, comes from a background in spatial planning in Switzerland, where participation is often tied to planning law and urban transformations rather than grand constitutional debates. He describes UrbanEquip’s mission as the “democratisation of urban development,” with a focus on projects that are both fun and capable of having a real impact on who shapes cities and towns. That mix of playfulness, income, and structural effect sits uneasily in a disaster context where administrations instinctively strip out anything that looks like experimentation or emotion.

In the interview, Lars stresses that their team avoids arriving with pre‑packaged “spatial justice” methods; instead, they enter situations experimentally, trying first to understand actual power hierarchies and then to find ways to speak about them, often subversively. Municipal clients, he notes, typically ask for neat, non‑“complicated” participation and would be frightened if someone turned up saying “we have this method,” especially when the topic is power structures and inequality 

Transposed to Blatten, this sheds light on why Decidim stalled. The valley council was already saturated with external experts and competing offers. A digital platform presented primarily as a service or “method” risked being perceived as one more claim on attention rather than a shared infrastructure of care and deliberation. From a safer‑spaces angle, the lesson is not simply that Decidim should have been adopted, but that in post‑disaster settings it needs to be framed (and possibly governed) less as a product and more as a common, low‑threshold space where a traumatised community can process loss, disagreement, and future options over time.

Playing out conflict rather than pretending collaboration

Lars’ other line of work, game design for urban development, offers a metaphor for what Decidim could have been in Blatten. UrbanEquip recently published a non‑collaborative board‑and‑role game about urban planning where players inhabit roles like revenue‑driven housing developers and must decide, based on incentives and trade‑offs, whether to collaborate or not. He is openly sceptical of purely collaborative games because they misrepresent reality: in cities, not everyone collaborates, and conflicts of interest are endemic 

That design philosophy maps neatly onto the valley’s situation. The reconstruction of Blatten is not a puzzle that can be solved by everyone pulling together neatly; it is a field of conflicting incentives involving donors, investors, engineers, risk‑averse politicians, and displaced residents with divergent hopes and fears. A Decidim instance here would not have magically produced consensus. But like Lars’ game, it might have provided a structured way for these roles to confront each other, understand constraints, and explore conditional collaboration, making non‑collaboration visible and discussable rather than allowing it to harden into silent paralysis.    

What the Decidim ecosystem can take forward

From this non‑deployment, three lessons emerge for the Decidim community and for practitioners working at the intersection of disaster recovery and digital participation 

Demand is not enough. In Valais, residents and local officials wanted the platform, and technically it was ready within days, but political overload meant it was never prioritised. Future deployments might experiment with more grassroots approaches, where citizens and civil society start using Decidim informally, with official recognition negotiated only once the space has demonstrated its value 

Social cohesion is core infrastructure, not a “soft” add‑on. The playbook’s safer‑spaces lens reminds us that solidarity, care, and ongoing contact are central to democratic capability‑building, especially for dispersed communities. Decidim practitioners could develop stronger arguments and evidence to help administrations see communication and emotional repair as part of the basic response, alongside housing and engineering 

Representation matters. In highly politicised, high‑stakes contexts, it may be more effective for Decidim to appear not as a commercial service provider but as a techno‑political project anchored in public value through local chapters or public institutions  so that it is not conflated with opportunistic “vultures.”

In the end, Blatten’s Decidim instance became a ghost infrastructure: configured, promising, but never inhabited. Yet by looking at it through Lars’ longer practice experimental participation, subversive work on power, and serious play we can see the deeper question it poses: after a catastrophe, how do we design digital and hybrid spaces that do not pretend everyone collaborates, but still help people learn to see each other, argue, and decide together about a shared, uncertain future?
