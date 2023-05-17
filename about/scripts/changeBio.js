$(document).ready(function() {
    var bioText = document.getElementById("bioText");

    var weThreeKingsImg = document.getElementById("WeThreeKingsImg");
    var sbmTeamImg = document.getElementById("SBMteamImg");
    var threeMonkeysImg = document.getElementById("ThreeMonkeysImg");
    var simNineImg = document.getElementById("Sim_NineImg");

    weThreeKingsImg.onclick = function() {
        sbmTeamImg.classList.remove("selectedAnimated");
        simNineImg.classList.remove("selectedAnimated");
        threeMonkeysImg.classList.remove("selectedAnimated");
        weThreeKingsImg.classList.add("selectedAnimated");
        weThreeKingsImg.classList.add("bioImgAnimated");
        weThreeKingsImg.classList.remove("selected");

        bioText.innerHTML = '<h2 class="text">WeThreeKings</h2>'+
        '<br />'+
        'WeThreeKings is the lead game and stage designer. He oversaw and managed all game design elements in Mobfall Arena, including developing the basic game flow from PvM to PvP, shop mechanics and initial iterations of the shop layout, mob spawning mechanics, special mob design, game settings, game balancing, and much more.'+
        '<br /><br />'+
        'As part of our arena construction workflow, WeThreeKings designed the basic layout of every stage before handing it off to SBMteam for decoration and world-building. When designing stages, WeThreeKings deeply considered player and mob movement options, vertical and horizontal lines of sight, core mechanics or themes like King of the Hill or Spleef, and stage size so that each arena offers a unique player experience.'+
        '<br /><br />'+
        'As well as managing overarching design elements, WeThreeKings contributed to the initial command block codebase with Sim_Nine by writing code that dealt with special mob spawning, fireworks, random number generation (RNG) logic, redstone setblock commands, special items, and special mob designs, which our coder ThreeMonkeys then edited, optimized, and improved in the datapack. Additionally, WeThreeKings helped tremendously with decoration and world-building; his work can be seen scattered across every map in the game, often tightly woven with his stage design concepts.'+
        '<br /><br />'+
        'WeThreeKings heavily contributed to the Mobfall Arena OST (Original Soundtrack) by composing, mixing, and mastering numerous tracks. He wrote the Mobfall motif, a short, representative musical idea that recurs all throughout the pieces of the album. As a professional jazz saxophonist, composer, and music educator, his artistic voice can be found through his compositions and chord progressions: Mobfall Heights, Cerulean Depths, The Lobby, San Fiacre, and Sweden; he also showcased his improvisational abilities on the EWI (an electronic saxophone that can directly input notes into a computer\'s Digital Audio Workstation or DAW), tenor saxophone, and electric piano. Additionally, he contributed to Cosmic Archives by writing a jazz-rock fusion drum beat and improvising portions of the guitar solo on EWI. As WeThreeKings said, inputting an improvised solo into the computer with electric instruments and editing and speeding up his ideas after the fact has allowed him to write "the optimal, perfect solo" for each piece.';
    }

    sbmTeamImg.onclick = function() {
        weThreeKingsImg.classList.remove("selectedAnimated");
        weThreeKingsImg.classList.remove("selected");
        weThreeKingsImg.classList.add("bioImgAnimated");
        simNineImg.classList.remove("selectedAnimated");
        threeMonkeysImg.classList.remove("selectedAnimated");
        sbmTeamImg.classList.add("selectedAnimated");
        sbmTeamImg.classList.add("bioImgAnimated");

        bioText.innerHTML = '<h2 class="text">SBMteam</h2>'+
        '<br />'+
        'SBMteam is the lead architect who oversaw and managed all building projects in Mobfall Arena. SBMteam would spend hours flying around to create immersive, detailed builds that aim to transport players to another world. His artistic eye compelled him to use several custom armor-stand creations (such as arcade machines, a ping-pong table, lawn chairs, etc.), and over 5 double chests of decorative custom player heads. At the suggestion of ThreeMonkeys, he created 6 custom terrain maps using WorldPainter that added to the immersion of the maps. SBMteam was instrumental in creating the images for over 960 custom map art files that display the Settings UI (User Interface, the visual representation of menus, sidebars, buttons, etc. in a game), Mobfall Museum artwork, and new block textures that enhance builds.'+
        '<br /><br />'+
        'SBMteam also made valuable contributions to the data pack, such as wording and formatting text for the Settings UI and gameplay textboxes, as well as implementing tutorial world logic. He also used the site minecraft.tools to generate interactive clickable books that execute code, initiate teleports, and more. Most notably, he programmed a Python script that automatically generated over 5200 advancement JSON files and mcfunction files that automatically reset trapdoors, chests, double chests, and doors in the Lobby and other stages; this prevents players (even in Adventure Mode) from interacting with certain blocks and restores items in chests hidden throughout The Lobby.'+
        '<br /><br />'+
        'SBMteam also served as the project\'s main social media content creator. He generated HD rendered photoshoots of the Mobfall Universe (using Chunky) that we posted in Minecraft subreddits, Discord servers, the Mobfall website, and our crowdfunding Ko-fi page. Having designed Mobfall Arena’s logo and merchandise, he also directed the Mobfall website design and layout. Additionally, he directed, edited, and published the video release trailers.'+
        '<br /><br />'+
        'Behind the scenes, he meticulously documented information about the project, also organizing and running our file backup system.'+
        '<br /><br />'+
        'SBMteam is not only visually artistic, but also musically artistic. He composed, mixed, and mastered the music for Harbin and Cosmic Archives, and he contributed to the music for Cerulean Depths, San Fiacre, and Victory Mountain (Sweden).';
    }

    threeMonkeysImg.onclick = function() {
        weThreeKingsImg.classList.remove("selectedAnimated");
        weThreeKingsImg.classList.remove("selected");
        weThreeKingsImg.classList.add("bioImgAnimated");
        sbmTeamImg.classList.remove("selectedAnimated");
        simNineImg.classList.remove("selectedAnimated");
        threeMonkeysImg.classList.add("selectedAnimated");
        threeMonkeysImg.classList.add("bioImgAnimated");

        bioText.innerHTML = '<h2 class="text">ThreeMonkeys</h2>'+
        '<br />'+
        'ThreeMonkeys is the lead command engineer and the main contributor to the Mobfall data pack, which contains 70,000+ commands across 16,000+ mcfunction files and 3300+ JSON files (approximately 80% of the mcfunctions were written by hand, while the remaining 20% were programmatically generated using Python). In addition to squashing many bugs, he designed and implemented many of the main features in the game, including the logic for the shop, death/respawn, music & sound effects, weapon & armor balancing, special arrows & weapons, mob spawning, special mob behavior & effects, leaderboard system, settings, interactive tutorial world, scorekeeping, timers, and much more. Additionally, he refactored the entire codebase, not once, but twice, to convert over 5500 command blocks into a data pack!'+
        '<br /><br />'+
        'ThreeMonkeys would often decide to implement a cool new feature on a whim, and alternated between periods of intense development with multiple all-nighters and periods of burnout and fatigue. This impulsive, ad-hoc style of development extended the development timeline by more than a year over the course of the project, which created a classic software development problem known as "feature creep." But feature creep itself is a feature, not a bug! Under the direction of ThreeMonkeys, Team Mobfall wrote a custom soundtrack for the game that was released as an album, made custom terrain with WorldPainter, designed and implemented complex user interfaces (UI is the visual representation of menus, sidebars, buttons, etc. in a game.), and designed a comprehensive tutorial.'+
        '<br /><br />'+
        'ThreeMonkeys also contributed heavily as a builder. He used WorldPainter to create a custom evergreen forest as the backdrop for the Cathedral of Glass, as well as a xeric shrubland biome as the backdrop for San Fiacre. Across all stages, he designed custom trees. In Mobdelphia, he built the baseball stadium, the skyscrapers inspired by One and Two Liberty Place, and 4 other skyscrapers.'+
        '<br /><br />'+
        'In addition to coding and building, ThreeMonkeys oversaw and directed the production of the Mobfall Arena soundtrack. He composed, mixed, and mastered the music for Naos Islands, Cathedral of Glass, and Mobdelphia, also contributing to the music for Mobfall Heights, Harbin, San Fiacre, Cerulean Depths, Cosmic Archives, and Sweden.'+
        '<br /><br />'+
        'ThreeMonkeys is the main developer of the Mobfall Arena website.';
    }

    simNineImg.onclick = function() {
        weThreeKingsImg.classList.remove("selectedAnimated");
        weThreeKingsImg.classList.remove("selected");
        weThreeKingsImg.classList.add("bioImgAnimated");
        sbmTeamImg.classList.remove("selectedAnimated");
        threeMonkeysImg.classList.remove("selectedAnimated");
        simNineImg.classList.add("selectedAnimated");
        simNineImg.classList.add("bioImgAnimated");

        bioText.innerHTML = '<h2 class="text">Sim_Nine</h2>'+
        '<br />'+
        'Sim_Nine was one of the founding developers of Mobfall Arena who contributed to a significant portion of the original command-block-powered codebase. Sim_Nine set up the code infrastructure that would eventually dictate the core layout of the data pack. He also participated as a core member of the beta testing team.'+
        '<br /><br />'+
        'Sim_Nine liked to use a variety of technologies to spur development on the project. He hosted and maintained the project\'s development server with Forge, and he prototyped the Mobfall website using Heroku. While tinkering with new features in Minecraft 1.13, Sim_Nine designed a data pack that procedurally generated the floating islands in Naos Islands. To help ThreeMonkeys transfer the command blocks into a data pack, Sim_Nine used GitHub, an online code management and version control platform, to facilitate data pack development.'+
        '<br /><br />'+
        'As a software developer in real life, Sim_Nine has remarked that the command block system in Minecraft makes for a terrible IDE (integrated development environment that helps programmers write code), since each line of code is obfuscated within an individual block in 3D space.';
    }

    weThreeKingsImg.classList.add("selected");
    bioText.innerHTML = '<h2 class="text">WeThreeKings</h2>'+
        '<br />'+
        'WeThreeKings is the lead game and stage designer. He oversaw and managed all game design elements in Mobfall Arena, including developing the basic game flow from PvM to PvP, shop mechanics and initial iterations of the shop layout, mob spawning mechanics, special mob design, game settings, game balancing, and much more.'+
        '<br /><br />'+
        'As part of our arena construction workflow, WeThreeKings designed the basic layout of every stage before handing it off to SBMteam for decoration and world-building. When designing stages, WeThreeKings deeply considered player and mob movement options, vertical and horizontal lines of sight, core mechanics or themes like King of the Hill or Spleef, and stage size so that each arena offers a unique player experience.'+
        '<br /><br />'+
        'As well as managing overarching design elements, WeThreeKings contributed to the initial command block codebase with Sim_Nine by writing code that dealt with special mob spawning, fireworks, random number generation (RNG) logic, redstone setblock commands, special items, and special mob designs, which our coder ThreeMonkeys then edited, optimized, and improved in the datapack. Additionally, WeThreeKings helped tremendously with decoration and world-building; his work can be seen scattered across every map in the game, often tightly woven with his stage design concepts.'+
        '<br /><br />'+
        'WeThreeKings heavily contributed to the Mobfall Arena OST (Original Soundtrack) by composing, mixing, and mastering numerous tracks. He wrote the Mobfall motif, a short, representative musical idea that recurs all throughout the pieces of the album. As a professional jazz saxophonist, composer, and music educator, his artistic voice can be found through his compositions and chord progressions: Mobfall Heights, Cerulean Depths, The Lobby, San Fiacre, and Sweden; he also showcased his improvisational abilities on the EWI (an electronic saxophone that can directly input notes into a computer\'s Digital Audio Workstation or DAW), tenor saxophone, and electric piano. Additionally, he contributed to Cosmic Archives by writing a jazz-rock fusion drum beat and improvising portions of the guitar solo on EWI. As WeThreeKings said, inputting an improvised solo into the computer with electric instruments and editing and speeding up his ideas after the fact has allowed him to write "the optimal, perfect solo" for each piece.';

});