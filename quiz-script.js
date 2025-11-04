document.addEventListener('DOMContentLoaded', () => {

  // --- 1. QUIZ DATA (100 Questions Total) ---
  const allQuizzes = [
    // --- Physical Metallurgy (20) ---
    {
      title: 'Physical Metallurgy 1: Crystal Structures',
      topic: 'Physical Metallurgy',
      questions: [
        { q: 'Which is the most densely packed crystal structure?', options: ['BCC', 'FCC', 'HCP', 'Simple Cubic'], a: 1, desc: 'Face-Centered Cubic (FCC) and Hexagonal Close-Packed (HCP) have the highest atomic packing factor (0.74). BCC is less dense (0.68).' },
        { q: 'What is a "unit cell"?', options: ['A single atom', 'A grain of metal', 'The smallest repeating unit of a crystal lattice', 'A type of corrosion'], a: 2, desc: 'A unit cell is the smallest repeating building block of a crystal lattice that shows the full symmetry of the crystal.' },
        { q: 'How many atoms are in a BCC unit cell?', options: ['1', '2', '4', '6'], a: 1, desc: 'A Body-Centered Cubic (BCC) cell has 1 atom at the center and 8 corner atoms, each shared by 8 cells (8 * 1/8 = 1). Total = 1 + 1 = 2 atoms.' },
        { q: 'What is a "dislocation"?', options: ['A missing atom', 'An extra atom', 'A line defect in a crystal', 'A type of crystal structure'], a: 2, desc: 'Dislocations are 1D line defects that are responsible for plastic deformation in crystalline materials.' },
        { q: 'Which of these is a point defect?', options: ['Vacancy', 'Dislocation', 'Grain boundary', 'Stacking fault'], a: 0, desc: 'A vacancy (a missing atom from a lattice site) is a zero-dimensional (0D) point defect. Dislocations are 1D, and grain boundaries are 2D defects.' },
        { q: 'Austenite (in steel) has which crystal structure?', options: ['BCC', 'FCC', 'HCP', 'Body-Centered Tetragonal'], a: 1, desc: 'Austenite, the high-temperature phase of iron and steel, has a Face-Centered Cubic (FCC) structure.' },
        { q: 'Ferrite (in steel) has which crystal structure?', options: ['BCC', 'FCC', 'HCP', 'Simple Cubic'], a: 0, desc: 'Ferrite (alpha-iron), the low-temperature phase, has a Body-Centered Cubic (BCC) structure.' },
        { q: 'Polymorphism or Allotropy is the ability of a material to...', options: ['...conduct electricity', '...exist in more than one crystal structure', '...resist heat', '...be magnetic'], a: 1, desc: 'Allotropy (for elements) or polymorphism (for compounds) is the ability to exist in different crystal structures depending on temperature and pressure (e.g., iron changing from BCC to FCC).' },
        { q: 'What is a "grain boundary"?', options: ['A point defect', 'A line defect', 'A 2D surface defect separating crystals of different orientation', 'The outer surface of the metal'], a: 2, desc: 'A grain boundary is a 2D planar interface that separates grains (crystals) having different crystallographic orientations in a polycrystalline solid.' },
        { q: 'What does the Miller Index (111) describe?', options: ['A direction in a crystal', 'A plane in a crystal', 'A point defect', 'A type of bond'], a: 1, desc: 'Miller indices in (hkl) format describe a family of parallel crystallographic planes. [uvw] in brackets is used for directions.' }
      ]
    },
    {
      title: 'Physical Metallurgy 2: Phase Diagrams',
      topic: 'Physical Metallurgy',
      questions: [
        { q: 'What is the "liquidus" line on a phase diagram?', options: ['The line below which everything is solid', 'The line above which everything is liquid', 'The line showing a single phase', 'The eutectic point'], a: 1, desc: 'The liquidus line is the boundary on a phase diagram above which a substance is entirely in the liquid state.' },
        { q: 'What is the "solidus" line on a phase diagram?', options: ['The line below which everything is in a stable solid state', 'The line above which everything is liquid', 'A line of constant temperature', 'The peritectic point'], a: 0, desc: 'The solidus line is the boundary below which the substance is entirely in the solid state. Between the liquidus and solidus lies a "mushy" liquid + solid zone.' },
        { q: 'A "eutectic" reaction is:', options: ['Liquid -> Solid 1 + Solid 2', 'Solid 1 -> Solid 2 + Solid 3', 'Liquid + Solid 1 -> Solid 2', 'Liquid 1 -> Liquid 2 + Solid 1'], a: 0, desc: 'A eutectic reaction is a three-phase reaction where a single liquid phase cools and transforms simultaneously into two different solid phases (L -> S1 + S2).' },
        { q: 'A "eutectoid" reaction is:', options: ['Liquid -> Solid 1 + Solid 2', 'Solid 1 -> Solid 2 + Solid 3', 'Liquid + Solid 1 -> Solid 2', 'Solid 1 -> Liquid + Solid 2'], a: 1, desc: 'A eutectoid reaction is a solid-state reaction where one solid phase transforms into two different solid phases (S1 -> S2 + S3). The pearlite reaction in steel is a classic example.' },
        { q: 'A "peritectic" reaction is:', options: ['Liquid -> Solid 1 + Solid 2', 'Solid 1 -> Solid 2 + Solid 3', 'Liquid + Solid 1 -> Solid 2', 'Solid 1 -> Liquid + Solid 2'], a: 2, desc: 'A peritectic reaction occurs when a liquid phase and a solid phase react during cooling to form a new, different solid phase (L + S1 -> S2).' },
        { q: 'What is Pearlite in the Fe-C system?', options: ['A single phase', 'A mixture of Austenite and Cementite', 'A lamellar mixture of Ferrite and Cementite', 'A mixture of Ferrite and Austenite'], a: 2, desc: 'Pearlite is the eutectoid microstructure in steel, formed from alternating, parallel layers (lamellae) of ferrite (α-Fe) and cementite (Fe3C).' },
        { q: 'What is "lever rule" used for?', options: ['To find the temperature of a reaction', 'To find the phases present', 'To find the amount (weight fraction) of each phase in a 2-phase region', 'To find the crystal structure'], a: 2, desc: 'The lever rule is a tool used to determine the relative amounts (weight fractions) of the two phases present in a two-phase region of a binary phase diagram.' },
        { q: 'What is Cementite (Fe3C)?', options: ['A soft, ductile phase', 'A very hard and brittle ceramic compound', 'A liquid phase', 'Another name for Austenite'], a: 1, desc: 'Cementite, or iron carbide (Fe3C), is a very hard, brittle interstitial compound that is a key component in steel, providing strength.' },
        { q: 'What is "annealing"?', options: ['Rapid cooling', 'Heating and then slow cooling to soften the material', 'Straining the material', 'Heating and holding at temperature'], a: 1, desc: 'Annealing is a heat treatment process that involves heating a material and then cooling it slowly (often in the furnace) to relieve internal stresses and increase ductility (soften it).' },
        { q: 'What is "quenching"?', options: ['Very slow cooling', 'Rapid cooling (e.g., in water or oil) to harden the material', 'Heating very quickly', 'Melting and re-solidifying'], a: 1, desc: 'Quenching is the process of rapid cooling from a high temperature. In steels, this "freezes" the atoms in place, forming Martensite, a very hard and brittle structure.' }
      ]
    },
    // --- Mechanical Metallurgy (20) ---
    {
      title: 'Mechanical Metallurgy 3: Tensile & Hardness',
      topic: 'Mechanical Metallurgy',
      questions: [
        { q: 'What does the "Yield Strength" of a material represent?', options: ['The point of fracture', 'The maximum stress it can withstand', 'The stress at which it begins to deform plastically (permanently)', 'Its stiffness'], a: 2, desc: 'Yield strength is the point on a stress-strain curve where the material transitions from elastic (temporary) deformation to plastic (permanent) deformation.' },
        { q: 'What does "Ultimate Tensile Strength" (UTS) represent?', options: ['The point of fracture', 'The maximum stress the material can withstand before necking', 'The yield point', 'The elastic limit'], a: 1, desc: 'UTS is the peak stress on the engineering stress-strain curve. It represents the maximum stress a material can endure before it begins to neck (thin down) and eventually fracture.' },
        { q: 'What property is measured by the "Modulus of Elasticity" (Young\'s Modulus)?', options: ['Ductility', 'Strength', 'Stiffness', 'Hardness'], a: 2, desc: 'The Modulus of Elasticity is the slope of the initial linear portion of the stress-strain curve. It defines the material\'s stiffness, or its resistance to elastic deformation.' },
        { q: 'How is "Ductility" commonly measured?', options: ['Percent Elongation and Percent Reduction in Area', 'Rockwell Hardness', 'Impact Energy', 'Yield Strength'], a: 0, desc: 'Ductility, the ability to be drawn into a wire, is measured by taking the fractured tensile specimen and measuring its total plastic stretch (% Elongation) and how much it thinned down (% Reduction in Area).' },
        { q: 'What does "Toughness" represent in a tensile test?', options: ['The maximum stress', 'The stiffness', 'The total area under the stress-strain curve', 'The yield point'], a: 2, desc: 'Toughness is the ability of a material to absorb energy before fracturing. In a tensile test, it is represented by the total area under the entire stress-strain curve.' },
        { q: 'Which hardness test uses a diamond indenter?', options: ['Brinell', 'Rockwell C', 'Shore', 'Mohs'], a: 1, desc: 'The Rockwell C (HRC) test, used for hard materials, uses a diamond cone indenter. The Brinell test uses a large tungsten carbide ball.' },
        { q: 'Which hardness test is considered a "microhardness" test?', options: ['Brinell', 'Rockwell C', 'Vickers', 'Shore'], a: 2, desc: 'The Vickers (and Knoop) test uses a small diamond indenter with very light loads, making it ideal for testing very small areas, thin films, or individual phases in a microstructure.' },
        { q: 'What is "work hardening" (or strain hardening)?', options: ['Softening a material by deforming it', 'Strengthening a material by plastic deformation', 'Hardening by heat treatment', 'Softening by heating'], a: 1, desc: 'Work hardening is the process of strengthening a material by deforming it plastically. This deformation creates and tangles dislocations, which impede each other\'s motion, thus increasing the strength.' },
        { q: 'The "0.2% offset" method is used to find what?', options: ['UTS', 'Fracture stress', 'Yield Strength', 'Elastic Modulus'], a: 2, desc: 'For materials that don\'t have a sharp yield point, the 0.2% offset method is used. A line is drawn parallel to the elastic slope, offset by 0.2% strain, and the stress where it intersects the curve is defined as the yield strength.' },
        { q: 'What is the "Poisson\'s Ratio"?', options: ['Ratio of stress to strain', 'Ratio of longitudinal strain to lateral strain', 'Ratio of lateral (transverse) strain to longitudinal (axial) strain', 'Ratio of shear stress to shear strain'], a: 2, desc: 'Poisson\'s Ratio is a measure of the "necking" effect. It describes how much a material contracts sideways when it is stretched (or bulges when compressed).' }
      ]
    },
    {
      title: 'Mechanical Metallurgy 4: Fracture & Fatigue',
      topic: 'Mechanical Metallurgy',
      questions: [
        { q: 'What is the primary visual characteristic of a "ductile" fracture surface?', options: ['Flat, bright, granular surface', 'Cup-and-cone surface with microvoids', 'A single, clean cleavage plane', 'Conchoidal (shell-like) markings'], a: 1, desc: 'Ductile fracture involves significant plastic deformation, resulting in a "cup-and-cone" shape and a fibrous, dimpled surface from the growth and joining of microvoids.' },
        { q: 'What is the primary visual characteristic of a "brittle" fracture surface?', options: ['Cup-and-cone shape', 'Significant necking', 'Flat, bright, granular, or faceted surface', 'Fibrous texture'], a: 2, desc: 'Brittle fracture occurs rapidly with little to no plastic deformation. The surface is typically flat and bright, often showing "chevron" markings or "cleavage" facets.' },
        { q: 'What is "fatigue" failure?', options: ['Failure due to high temperature', 'Failure due to a single overload', 'Failure under repeated, cyclic loading (below the yield strength)', 'Failure due to corrosion'], a: 2, desc: 'Fatigue is a progressive failure mechanism where a crack initiates and grows under repeated cyclic stresses (like bending, vibration, or rotation), even if the peak stress is below the material\'s yield strength.' },
        { q: 'What are the three stages of fatigue failure?', options: ['Elastic, Plastic, Fracture', 'Initiation, Propagation, Final Fracture', 'Corrosion, Erosion, Fracture', 'Creep, Stress Rupture, Fracture'], a: 1, desc: 'Fatigue failure proceeds in three stages: 1) Crack Initiation (at a stress riser), 2) Crack Propagation (growth with each cycle, leaving "beachmarks"), and 3) Final Fracture (when the crack is so large the remaining area fails instantly).' },
        { q: 'What are "beachmarks" on a fatigue fracture surface?', options: ['Marks from corrosion', 'Microscopic dimples', 'Macroscopic lines showing the stop/start progression of the fatigue crack', 'Chevron markings'], a: 2, desc: 'Beachmarks (or clamshell marks) are visible, concentric lines that show the position of the crack front at different points in time. They are a classic sign of fatigue.' },
        { q: 'What is the "endurance limit" or "fatigue limit"?', options: ['The maximum stress a material can withstand', 'The stress level below which a material will *never* fail in fatigue', 'The number of cycles to failure', 'The fracture toughness'], a: 1, desc: 'The endurance limit (found in steels and some titanium alloys) is a stress amplitude below which the material can endure a seemingly infinite number of cycles without failing.' },
        { q: 'What is "creep" failure?', options: ['Failure due to cyclic loading', 'Sudden brittle fracture', 'Slow, progressive deformation and failure at high temperature under a constant load', 'Failure due to corrosion'], a: 2, desc: 'Creep is time-dependent, permanent deformation that occurs when a material is held at a high temperature (relative to its melting point) under a constant stress.' },
        { q: 'What does the "Ductile-to-Brittle Transition Temperature" (DBTT) describe?', options: ['The melting point', 'The temperature at which a material changes from FCC to BCC', 'The temperature below which a material fails in a brittle manner, rather than a ductile one', 'The annealing temperature'], a: 2, desc: 'The DBTT is a critical property for BCC metals (like steel). Above this temperature, they are tough and ductile, but below it, they become very brittle and prone to catastrophic failure (e.g., the Titanic).' },
        { q: 'The "Charpy" impact test is used to measure what?', options: ['Yield Strength', 'Fatigue Life', 'Fracture Toughness / Notch Sensitivity', 'Hardness'], a: 2, desc: 'The Charpy (and Izod) impact test measures a material\'s notch toughness, which is its ability to absorb energy during a high-speed impact. It is commonly used to determine the DBTT.' },
        { q: 'A "stress concentration" (or stress riser) is...', options: ['...a location where stress is amplified, such as a sharp corner or crack', '...a material with high strength', '...a type of heat treatment', '...the endurance limit'], a: 0, desc: 'Stress concentrations are geometric features (holes, fillets, scratches, cracks) that cause the local stress to be much higher than the average, nominal stress. They are the primary initiation sites for fatigue and brittle fracture.' }
      ]
    },
    // --- Manufacturing Process (20) ---
    {
      title: 'Manufacturing 5: Casting & Welding',
      topic: 'Manufacturing Process',
      questions: [
        { q: 'What is the "pattern" in sand casting?', options: ['The mold cavity', 'A replica of the final part, used to make the mold', 'The gating system', 'The core'], a: 1, desc: 'The pattern is a model of the part being cast, with allowances for shrinkage and machining. It is pressed into the sand to create the mold cavity (the empty space).' },
        { q: 'What is a "core" in casting?', options: ['The center of the furnace', 'The gating system', 'A sand shape placed inside the mold to create hollow sections', 'The outer shell of the mold'], a: 2, desc: 'A core is a separate sand shape that is placed into the mold cavity *before* pouring metal. The metal flows around it, and after solidification, the core is broken out to leave an internal, hollow feature.' },
        { q: 'Which casting process uses a wax pattern that is melted out?', options: ['Sand Casting', 'Investment Casting', 'Die Casting', 'Centrifugal Casting'], a: 1, desc: 'Investment Casting (also called "lost-wax casting") involves making a wax pattern, coating it in ceramic to form a shell, and then melting the wax out to leave a high-precision mold.' },
        { q: 'Which casting process forces molten metal into a steel mold under high pressure?', options: ['Sand Casting', 'Investment Casting', 'Die Casting', 'Shell Molding'], a: 2, desc: 'Die Casting is used for high-volume production (e.g., toy cars, engine blocks). Molten metal is injected at high pressure into a permanent, hardened steel mold (a "die").' },
        { q: 'What is the "Heat Affected Zone" (HAZ) in a weld?', options: ['The molten weld metal itself', 'The area of base metal that was melted', 'The area of base metal that was *not* melted, but whose properties were altered by the heat', 'The welding electrode'], a: 2, desc: 'The HAZ is the zone of solid base metal right next to the weld bead. It did not melt, but the welding heat was high enough to cause microstructural changes (like grain growth or phase changes) that can weaken or embrittle the joint.' },
        { q: 'What does "SMAW" stand for?', options: ['Shielded Metal Arc Welding', 'Submerged Metal Arc Welding', 'Strong Metal Arc Welding', 'Solid Metal Arc Welding'], a: 0, desc: 'SMAW, or "stick welding," is Shielded Metal Arc Welding. The "shield" comes from the flux coating on the electrode, which burns to create a protective gas cloud.' },
        { q: 'What is the primary role of the "flux" in SMAW?', options: ['To melt the metal', 'To provide a protective shielding gas and slag cover', 'To add filler metal', 'To conduct electricity'], a: 1, desc: 'The flux coating melts to generate a shielding gas (protecting the arc from oxygen/nitrogen) and forms a "slag" layer on top of the weld bead to protect it as it cools.' },
        { q: 'What does "TIG" (or GTAW) welding use as an electrode?', options: ['A consumable steel wire', 'A non-consumable tungsten electrode', 'A flux-coated stick', 'A metal tube'], a: 1, desc: 'Tungsten Inert Gas (TIG), or Gas Tungsten Arc Welding (GTAW), uses a non-consumable tungsten electrode to create the arc. Filler metal, if needed, is added separately.' },
        { q: 'What does "MIG" (or GMAW) welding use as an electrode?', options: ['A non-consumable tungsten electrode', 'A flux-coated stick', 'A continuously fed, consumable wire', 'A carbon rod'], a: 2, desc: 'Metal Inert Gas (MIG), or Gas Metal Arc Welding (GMAW), uses a spool of wire that is continuously fed through the welding gun. This wire acts as both the electrode and the filler metal.' },
        { q: 'What is "porosity" in a weld?', options: ['A crack', 'A hard spot', 'Gas bubbles trapped in the solidified weld metal', 'A region that didn"t fuse'], a: 2, desc: 'Porosity is a weld defect caused by gas (like hydrogen or nitrogen) being trapped in the weld pool as it solidifies, resulting in small, round voids or "pinholes" that weaken the joint.' }
      ]
    },
    {
      title: 'Manufacturing 6: Forming & Machining',
      topic: 'Manufacturing Process',
      questions: [
        { q: 'What is "rolling" in manufacturing?', options: ['A casting process', 'A machining process', 'A process of reducing thickness by passing material through two rollers', 'A welding process'], a: 2, desc: 'Rolling is a metal forming process where a billet or slab is passed between rollers to reduce its cross-sectional area (e.g., making I-beams, sheets, or plates).' },
        { q: 'What is the main difference between "hot working" and "cold working"?', options: ['Hot working is faster', 'Cold working uses a mold', 'Hot working is done above the recrystallization temperature; cold working is done below it', 'Hot working is only for steel'], a: 2, desc: 'Hot working (like hot rolling) is done at a high temperature where the material recrystallizes, making it easy to deform. Cold working (like cold rolling) is done at room temperature, which strengthens the material (work hardening) but makes it less ductile.' },
        { q: 'What is "forging"?', options: ['Pouring metal into a mold', 'Shaping metal by localized compressive forces (hitting it with a hammer or press)', 'Cutting metal with a tool', 'Melting two pieces together'], a: 1, desc: 'Forging (e.g., making a wrench or crankshaft) involves heating metal and then shaping it using a hammer or a die press, which aligns the grain flow and creates a very strong, tough part.' },
        { q: 'What is "extrusion"?', options: ['Pulling metal through a die', 'Pushing metal through a die to create a long, continuous shape', 'Rolling metal flat', 'Bending a sheet'], a: 1, desc: 'Extrusion is like squeezing toothpaste from a tube. A billet of (usually hot) metal is pushed through a shaped die to produce a long part with a constant cross-section (e.g., aluminum window frames).' },
        { q: 'What is the "lathe" machine tool used for?', options: ['Drilling holes', 'Creating flat surfaces', 'Creating cylindrical parts by rotating a workpiece against a cutting tool', 'Cutting gears'], a: 2, desc: 'A lathe (or "turning" center) rotates the workpiece while a stationary, single-point cutting tool moves along its length or radius to create cylindrical shapes, faces, and threads.' },
        { q: 'What is the "milling" machine tool used for?', options: ['Creating cylindrical parts', 'Drilling holes', 'Creating complex shapes and flat surfaces by rotating a multi-toothed cutting tool against a workpiece', 'Drawing wire'], a: 2, desc: 'A milling machine holds the part stationary (or moves it slowly) while a rotating cutter with multiple teeth (like an end mill) removes material to create pockets, slots, flat surfaces, and complex contours.' },
        { q: 'What is "drilling"?', options: ['Creating a cylindrical part', 'Creating a hole by rotating a multi-point tool', 'Creating a flat surface', 'Creating a threaded hole'], a: 1, desc: 'Drilling is the process of creating a round hole using a rotating "drill bit" as the cutting tool.' },
        { q: 'What is "tapping"?', options: ['Creating a hole', 'Measuring a hole', 'Creating internal threads inside a hole', 'Making a hole perfectly round'], a: 2, desc: 'Tapping is the process that follows drilling. A "tap" (a threaded tool) is screwed into the hole to cut internal "female" threads, allowing a bolt to be screwed in.' },
        { q: 'What is "shearing" in sheet metal?', options: ['Bending', 'Stretching', 'Cutting the sheet by applying opposing forces', 'Welding'], a: 2, desc: 'Shearing is the process of cutting a straight line on a sheet of metal by using a "shear" machine, which functions like a large pair of scissors with two opposing blades.' },
        { q: 'What is "deep drawing"?', options: ['A forging process', 'A casting process', 'A sheet metal process for forming a flat blank into a cup or "drawn" shape', 'A machining process'], a: 2, desc: 'Deep drawing is used to make parts like sinks, pots, and pans. A flat sheet metal blank is placed over a die and a punch pushes the metal into the die cavity, stretching and forming it into a 3D shape.' }
      ]
    },
    // --- Extractive Metallurgy (20) ---
    {
      title: 'Extractive 7: Pyrometallurgy',
      topic: 'Extractive Metallurgy',
      questions: [
        { q: 'What is "pyrometallurgy"?', options: ['Extracting metal using water-based solutions', 'Extracting metal using electricity', 'Extracting metal using high temperatures', 'Extracting metal using biology'], a: 2, desc: 'Pyrometallurgy involves metallurgical processes that use high temperatures (e.g., melting, roasting, smelting) to extract and refine metals.' },
        { q: 'What is "roasting" in extractive metallurgy?', options: ['Melting the ore', 'Heating an ore (often a sulfide) in the presence of air', 'Dissolving the ore in acid', 'Electrolyzing the ore'], a: 1, desc: 'Roasting is a high-temperature heating process in air (or oxygen) to convert a metal ore (like lead sulfide, PbS) into a metal oxide (PbO), which is easier to reduce.' },
        { q: 'What is "smelting"?', options: ['A process of reducing an ore to a molten metal, often using a "flux" and "reductant"', 'A process of dissolving ore in acid', 'A process of crushing ore', 'A process of simply melting ore'], a: 0, desc: 'Smelting is a reduction process that takes place at high temperatures. For example, in an iron blast furnace, iron oxide is reduced by carbon (reductant) with limestone (flux) to produce molten iron.' },
        
        // --- THIS WAS THE FIRST ERROR ---
        { q: 'What is the primary "reductant" in an iron blast furnace?', options: ['Oxygen', 'Carbon (from coke) and Carbon Monoxide (CO)', 'Limestone', 'Silicon'], a: 1, desc: 'Coke (a high-carbon fuel) is burned to produce heat and carbon monoxide (CO) gas. This CO gas is the primary reducing agent that removes oxygen from the iron oxide ore.' },
        
        { q: 'What is the purpose of a "flux" (like limestone) in smelting?', options: ['To act as a fuel', 'To act as a reductant', 'To remove impurities by forming a "slag"', 'To increase the melting point'], a: 2, desc: 'A flux (like limestone, CaCO3) is added to react with impurities (like silica, SiO2, or "gangue") in the ore. This reaction forms a low-melting-point liquid "slag" which floats on top of the molten metal and can be easily removed.' },
        { q: 'What is "slag"?', options: ['The pure molten metal', 'The un-melted ore', 'A molten waste product consisting of impurities and flux', 'The reducing gas'], a: 2, desc: 'Slag is the glassy, molten waste product from smelting. It is a mixture of the flux and the non-metallic impurities (gangue) from the ore.' },
        { q: 'Bessemer and Basic Oxygen Furnace (BOF) are processes used for what?', options: ['Making iron from ore', 'Making steel from molten iron (pig iron)', 'Roasting sulfide ores', 'Casting the final product'], a: 1, desc: 'The BOF (and the older Bessemer converter) is the primary method for steelmaking. High-pressure oxygen is blown through the molten pig iron to burn off excess carbon and other impurities, refining the iron into steel.' },
        { q: 'What is "matte" in copper smelting?', options: ['The pure copper', 'The slag', 'A molten mixture of copper sulfide and iron sulfide', 'The copper oxide ore'], a: 2, desc: 'In copper smelting, the first product is "matte," a molten Cu2S-FeS mixture. This matte is then further processed in a converter to remove the iron (as slag) and sulfur (as SO2 gas) to produce "blister" copper.' },
        { q: 'What is "coke" in metallurgy?', options: ['A soft drink', 'A type of coal', 'A high-carbon, low-impurity fuel produced by heating coal without air', 'The iron ore'], a: 2, desc: 'Coke is a processed fuel used in blast furnaces. It provides the heat for the process and, more importantly, acts as the source of the carbon (C) and carbon monoxide (CO) reducing agents.' },
        { q: 'What is "calcination"?', options: ['Heating to cause decomposition (e.g., driving CO2 from limestone)', 'Heating in the presence of air', 'Melting', 'Dissolving in acid'], a: 0, desc: 'Calcination is heating a solid to a high temperature to drive off a volatile component. A key example is heating limestone (CaCO3) to produce lime (CaO) and carbon dioxide (CO2). The lime is then used as the flux.' }
      ]
    },
    {
      title: 'Extractive 8: Hydro & Electro',
      topic: 'Extractive Metallurgy',
      questions: [
        { q: 'What is "hydrometallurgy"?', options: ['Extracting metal using high temperatures', 'Extracting metal using water-based (aqueous) solutions', 'Extracting metal using electricity', 'Extracting metal using molten salts'], a: 1, desc: 'Hydrometallurgy uses chemical processes in aqueous (water) solutions to extract metals from ores, often at low temperatures.' },
        { q: 'What is "leaching"?', options: ['Melting an ore', 'Crushing an ore', 'Dissolving the desired metal from an ore using a chemical solvent (leachant)', 'Heating an ore in air'], a: 2, desc: 'Leaching is the first step in hydrometallurgy. An ore (e.g., low-grade copper oxide) is treated with a solvent (e.g., sulfuric acid) which dissolves the metal, leaving the waste rock behind.' },
        { q: 'The "Bayer Process" is a hydrometallurgical process used to produce...?', options: ['...Iron from iron ore', '...Copper from sulfide ore', '...Alumina (Al2O3) from Bauxite ore', '...Gold from rock'], a: 2, desc: 'The Bayer process is the primary method for producing alumina (aluminum oxide). It uses a hot sodium hydroxide (caustic soda) solution to leach the alumina from the bauxite ore.' },
        { q: 'What is "electrometallurgy"?', options: ['Extracting metal using high temperatures', 'Extracting metal using water-based solutions', 'Extracting metal using electrical energy', 'Extracting metal using magnetism'], a: 2, desc: 'Electrometallurgy uses electric currents to process metals, either by "electrowinning" (extraction) or "electrorefining" (purification).' },
        { q: 'What is "electrowinning"?', options: ['Using electricity to purify a crude metal', 'Using electricity to extract (or "win") a metal from a dissolved leach solution', 'Using electricity to melt a metal', 'Using electricity to weld'], a: 1, desc: 'Electrowinning (or "electroextraction") involves passing a current through a leach solution (e.g., copper sulfate). The metal ions (Cu2+) plate onto the cathode, producing a pure solid metal.' },
        { q: 'What is "electrorefining"?', options: ['Using electricity to extract metal from an ore', 'Using electricity to purify a crude, impure metal', 'Using electricity to dissolve an ore', 'Using electricity to heat an ore'], a: 1, desc: 'In electrorefining, an impure anode (e.g., crude "blister" copper) and a pure cathode are placed in an electrolyte. The impure anode dissolves, and only the pure metal (copper) plates onto the cathode, leaving impurities behind.' },
        { q: 'The "Hall-Héroult" process is an electrometallurgical process used for...?', options: ['...refining copper', '...extracting zinc', '...producing pure aluminum from alumina (Al2O3)', '...producing steel'], a: 2, desc: 'The Hall-Héroult process is the *only* way primary aluminum is made. It involves dissolving alumina (from the Bayer process) in a molten "cryolite" salt bath and passing a strong electric current through it to reduce the Al2O3 to molten aluminum metal.' },
        { q: 'What is "cyanidation"?', options: ['A pyrometallurgical process', 'A process for making steel', 'A hydrometallurgical process for leaching gold and silver', 'A type of corrosion'], a: 2, desc: 'Cyanidation is the most common method for extracting gold. Crushed ore is leached with a dilute sodium cyanide (NaCN) solution, which selectively dissolves the gold.' },
        { q: 'What is "solvent extraction" (SX) in hydrometallurgy?', options: ['Dissolving the ore', 'A process to concentrate and purify a metal from a leach solution using an organic liquid', 'Using a solvent to clean the metal', 'Using a solvent to melt the metal'], a: 1, desc: 'Solvent Extraction (SX) is an intermediate step. An "impure" aqueous leach solution is mixed with an "organic" liquid that selectively bonds to and "extracts" the desired metal (e.g., copper), leaving impurities in the water. The metal is then "stripped" from the organic to create a pure, concentrated solution for electrowinning.' },
        { q: 'Which two processes are often paired as "SX/EW"?', options: ['Smelting / Electrowinning', 'Solvent Extraction / Electrowinning', 'Smelting / Electrorefining', 'Solvent Extraction / Electrorefining'], a: 1, desc: 'SX/EW (Solvent Extraction / Electrowinning) is a very common hydrometallurgical combination used to produce high-purity copper. SX concentrates the solution, and EW plates out the pure metal.' }
      ]
    },
    // --- Thermodynamics (20) ---
    {
      title: 'Thermodynamics 9: Laws & Enthalpy',
      topic: 'Thermodynamics',
      questions: [
        { q: 'What is the "First Law of Thermodynamics"?', options: ['Energy cannot be created or destroyed, only change forms', 'Entropy always increases', 'A pure crystal at 0K has zero entropy', 'Heat flows from hot to cold'], a: 0, desc: 'The First Law is the law of Conservation of Energy. It states that the change in the internal energy (ΔU) of a system is equal to the heat added (Q) minus the work done by the system (W). ΔU = Q - W.' },
        { q: 'What is a "system" in thermodynamics?', options: ['The entire universe', 'The specific part of the universe being studied', 'A set of laws', 'A type of engine'], a: 1, desc: 'A "system" is the defined region or quantity of matter under study (e.g., the gas inside a piston). Everything else is the "surroundings".' },
        { q: 'What is an "adiabatic" process?', options: ['A process at constant temperature', 'A process at constant pressure', 'A process with no heat transfer (Q=0)', 'A process at constant volume'], a: 2, desc: 'An adiabatic process is one where no heat is transferred into or out of the system. This happens if the system is perfectly insulated or if the process occurs extremely quickly.' },
        { q: 'What is an "isothermal" process?', options: ['A process at constant temperature', 'A process at constant pressure', 'A process with no heat transfer', 'A process at constant volume'], a: 0, desc: 'An isothermal process is one that occurs at a constant temperature (ΔT = 0). To achieve this, any heat generated or consumed must be transferred to/from the surroundings.' },
        { q: 'What is "enthalpy" (H)?', options: ['A measure of disorder', 'The total energy of a system', 'A measure of the total heat content of a system (H = U + PV)', 'The rate of heat transfer'], a: 2, desc: 'Enthalpy (H) is a thermodynamic property that combines internal energy (U) with the "flow work" (PV) required to make room for the system. In many chemical reactions, the change in enthalpy (ΔH) is equal to the heat (Q) absorbed or released.' },
        { q: 'What does a *negative* ΔH (Enthalpy Change) signify?', options: ['An "endothermic" reaction (absorbs heat)', 'An "exothermic" reaction (releases heat)', 'A reaction at constant temperature', 'A reaction that does not happen'], a: 1, desc: 'A negative ΔH means the system *lost* heat to the surroundings. This is an "exothermic" reaction, one that feels hot (e.g., combustion).' },
        { q: 'What does a *positive* ΔH (Enthalpy Change) signify?', options: ['An "endothermic" reaction (absorbs heat)', 'An "exothermic" reaction (releases heat)', 'A reaction at constant volume', 'A spontaneous reaction'], a: 0, desc: 'A positive ΔH means the system *absorbed* heat from the surroundings. This is an "endothermic" reaction, one that feels cold (e.g., an instant ice pack).' },
        { q: 'What is "Hess\'s Law"?', options: ['Entropy always increases', 'The total enthalpy change for a reaction is the same, no matter how many steps it takes', 'Heat flows from hot to cold', 'Energy is conserved'], a: 1, desc: 'Hess\'s Law states that if a reaction can be broken down into a series of steps, the total enthalpy change (ΔH) for the overall reaction is simply the sum of the enthalpy changes for each individual step.' },
        { q: 'What is "specific heat capacity"?', options: ['The total heat in a system', 'The temperature at which a material melts', 'The amount of heat required to raise the temperature of 1 gram of a substance by 1°C', 'The rate of heating'], a: 2, desc: 'Specific heat capacity (c) is an intensive property that measures how much heat (Q) is needed to raise the temperature of a given mass (m). The formula is Q = mcΔT.' },
        { q: 'What is the "Zeroth Law of Thermodynamics"?', options: ['Energy is conserved', 'Entropy increases', 'If A=B and B=C, then A=C (for thermal equilibrium)', 'Heat flows from hot to cold'], a: 2, desc: 'The Zeroth Law defines thermal equilibrium. It states that if two systems (A and B) are each in thermal equilibrium with a third system (C), then A and B are in thermal equilibrium with each other.' }
      ]
    },
    {
      title: 'Thermodynamics 10: Entropy & Free Energy',
      topic: 'Thermodynamics',
      questions: [
        { q: 'What is the "Second Law of Thermodynamics"?', options: ['Energy is conserved', 'The total entropy (disorder) of the universe always increases', 'A pure crystal at 0K has zero entropy', 'Heat cannot flow from cold to hot without work'], a: 1, desc: 'The Second Law deals with disorder. It states that for any spontaneous process, the total entropy of the universe (system + surroundings) must increase. It also implies that heat naturally flows from hot to cold.' },
        { q: 'What is "entropy" (S)?', options: ['A measure of heat content', 'A measure of the disorder, randomness, or number of microstates of a system', 'The total energy of a system', 'The pressure of a system'], a: 1, desc: 'Entropy (S) is a quantitative measure of randomness or "disorder." A gas has higher entropy than a liquid, which has higher entropy than a solid. A central concept in the 2nd and 3rd laws.' },
        { q: 'What is the "Third Law of Thermodynamics"?', options: ['Energy is conserved', 'Entropy always increases', 'The entropy of a perfect, pure crystal at absolute zero (0 K) is zero', 'Enthalpy is constant'], a: 2, desc: 'The Third Law sets a baseline for entropy. It states that at 0 Kelvin (-273.15°C), all atomic motion ceases, and a perfect crystal would have only one possible microstate, corresponding to zero entropy.' },
        { q: 'Which of these processes leads to an *increase* in entropy?', options: ['Water freezing into ice', 'Gasoline burning (combustion)', 'A gas condensing into a liquid', 'Precipitating a solid from a solution'], a: 1, desc: 'Combustion (C8H18 + O2 -> CO2 + H2O) is a reaction where a few molecules of liquid and gas turn into *many* molecules of hot gas. This is a massive increase in disorder (entropy).' },
        { q: 'Which of these processes leads to a *decrease* in entropy?', options: ['Ice melting into water', 'Water boiling into steam', 'Water vapor condensing into liquid water', 'Salt dissolving in water'], a: 2, desc: 'Condensation (gas -> liquid) is a process of ordering. The fast-moving, randomly spread-out gas molecules become a denser, more structured liquid, which is a *decrease* in entropy.' },
        { q: 'What is "Gibbs Free Energy" (G)?', options: ['The total energy of the universe', 'A measure of heat', 'A measure of disorder', 'A value that determines the "spontaneity" of a reaction at constant T and P'], a: 3, desc: 'Gibbs Free Energy (G) is the most important value for metallurgists. It combines enthalpy (H) and entropy (S) via the equation G = H - TS. It represents the maximum "useful work" a system can do.' },
        { q: 'If the change in Gibbs Free Energy (ΔG) for a reaction is *negative*...', options: ['...the reaction is "spontaneous" (thermodynamically favorable)', '...the reaction is "non-spontaneous" (will not happen)', '...the reaction is at equilibrium', '...the reaction is endothermic'], a: 0, desc: 'This is the golden rule of thermodynamics. A negative ΔG means the reaction *wants* to happen (it is "spontaneous" or "exergonic") and can proceed without external energy input.' },
        { q: 'If the change in Gibbs Free Energy (ΔG) for a reaction is *positive*...', options: ['...the reaction is "spontaneous"', '...the reaction is "non-spontaneous" (thermodynamically unfavorable)', '...the reaction is at equilibrium', '...the reaction is exothermic'], a: 1, desc: 'A positive ΔG means the reaction *will not* happen on its own. To make it proceed, energy must be supplied to the system (e.g., electrolysis, which has a positive ΔG, requires electricity).' },
        { q: 'If the change in Gibbs Free Energy (ΔG) for a reaction is *zero*...', options: ['...the reaction is "spontaneous"', '...the reaction is "non-spontaneous"', '...the system is at "equilibrium"', '...the reaction is impossible'], a: 2, desc: 'A ΔG of zero means the forward and reverse reactions are happening at the same rate. The system is stable and at equilibrium (e.g., ice and water coexisting at 0°C).' },
        { q: 'What is the "Ellingham Diagram"?', options: ['A phase diagram', 'A stress-strain curve', 'A graph of ΔG versus Temperature (T) for oxidation reactions', 'A graph of pressure vs. volume'], a: 2, desc: 'The Ellingham Diagram is a metallurgist\'s most powerful tool. It plots ΔG vs. T for the formation of various oxides. It is used to determine which metal will reduce another metal\'s oxide at a given temperature (the lines lower on the graph can reduce the lines above them).' }
      ]
    }
  ];

  // --- 2. DOM Element References ---
  const quizListContainer = document.getElementById('quiz-list');
  const quizSelectionArea = document.getElementById('quiz-selection-area');
  const quizRunner = document.getElementById('quiz-runner');
  const quizContainer = document.getElementById('quiz-container');
  const quizTitle = document.getElementById('quiz-title');
  const filterSelect = document.getElementById('topic-filter');
  const returnBtn = document.getElementById('quiz-return-btn');

  // --- 3. State Variables ---
  let currentQuiz = null;
  let current = 0;
  let score = 0;

  // --- 4. Core Functions ---

  /**
   * Populates the list of quizzes based on the selected filter
   */
  function populateQuizList() {
    const filterValue = filterSelect.value;
    quizListContainer.innerHTML = ''; // Clear the list

    // Filter the quizzes
    const filteredQuizzes = allQuizzes.filter(quiz => 
      filterValue === 'all' || quiz.topic === filterValue
    );

    // Create HTML for each filtered quiz
    filteredQuizzes.forEach((quiz, index) => {
      const quizCard = document.createElement('div');
      quizCard.className = 'card quiz-card';
      
      quizCard.innerHTML = `
        <span class="topic-tag">${quiz.topic}</span>
        <h3>${quiz.title}</h3>
        <p>${quiz.questions.length} Questions</p>
        <button class="btn btn-primary" data-quiz-index="${index}">Start Quiz</button>
      `;
      
      // We must re-map the index to the original `allQuizzes` array
      // A safer way is to use a unique ID, but for this, we find the original index
      const originalIndex = allQuizzes.findIndex(q => q.title === quiz.title);
      quizCard.querySelector('button').dataset.quizIndex = originalIndex;

      quizListContainer.appendChild(quizCard);
    });
  }

  /**
   * Starts a quiz, hiding the list and showing the quiz runner
   */
  function startQuiz(quizIndex) {
    currentQuiz = allQuizzes[quizIndex];
    current = 0;
    score = 0;

    // Show quiz runner, hide selection list
    quizSelectionArea.style.display = 'none';
    quizRunner.style.display = 'block';
    quizTitle.textContent = currentQuiz.title;
    returnBtn.style.display = 'none';

    renderQuizQuestion();
  }

  /**
   * Renders the current question or the final score screen
   */
  function renderQuizQuestion() {
    if (current >= currentQuiz.questions.length) {
      // Quiz is over
      
      // --- THIS WAS THE SECOND ERROR ---
      quizContainer.innerHTML = `
        <div class='card'> 
          <h3>Quiz Completed!</h3>
          <p id="quiz-final-score">Your final score: ${score} out of ${currentQuiz.questions.length}</p>
        </div>`;
      returnBtn.style.display = 'inline-block'; // Show return button
      return;
    }

    const q = currentQuiz.questions[current];
    
    const optionsHTML = q.options.map((opt, index) => 
      `<button class='btn btn-option' data-index='${index}'>${opt}</button>`
    ).join('');
    
    quizContainer.innerHTML = `
      <div class='card'>
        <p style="font-weight: 600; margin-bottom: 0.5rem;">Question ${current + 1} of ${currentQuiz.questions.length}</p>
        <h3>${q.q}</h3>
        <div id="quiz-options">
          ${optionsHTML}
        </div>
        <div id="quiz-feedback"></div>
        <button class='btn btn-primary' id='nextBtn' style='display: none; margin-top: 1rem;'>Next Question</button>
      </div>`;
    
    document.querySelectorAll('.btn-option').forEach(btn => {
      btn.addEventListener('click', handleAnswer);
    });
  }

  /**
   * Handles when a user clicks an answer
   */
  function handleAnswer(e) {
    const selectedIndex = parseInt(e.target.dataset.index);
    const q = currentQuiz.questions[current];
    const feedbackDiv = document.getElementById('quiz-feedback');
    
    // Disable all option buttons
    document.querySelectorAll('.btn-option').forEach(btn => {
      btn.disabled = true;
    });

    // Create the detailed description HTML
    const descriptionHTML = `
      <div class="quiz-description-answer">
        <strong>Explanation:</strong>
        ${q.desc}
      </div>`;

    if (selectedIndex === q.a) {
      // Correct
      score++;
      feedbackDiv.innerHTML = 'Correct!';
      feedbackDiv.className = 'feedback-correct';
      feedbackDiv.innerHTML += descriptionHTML; // Add description
    } else {
      // Incorrect
      feedbackDiv.innerHTML = `Incorrect. The correct answer was: <strong>${q.options[q.a]}</strong>`;
      feedbackDiv.className = 'feedback-incorrect';
      feedbackDiv.innerHTML += descriptionHTML; // Add description
    }
    
    // Show the "Next" button
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.style.display = 'inline-block';
    nextBtn.onclick = () => {
      current++;
      renderQuizQuestion();
    };
  }

  /**
   * Returns the user to the main quiz list
   */
  function returnToQuizList() {
    quizRunner.style.display = 'none';
    quizSelectionArea.style.display = 'block';
    currentQuiz = null;
  }

  // --- 5. Event Listeners ---
  
  // Listen for clicks on the quiz list (event delegation)
  quizListContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.dataset.quizIndex) {
      startQuiz(parseInt(e.target.dataset.quizIndex));
    }
  });

  // Listen for changes on the filter dropdown
  filterSelect.addEventListener('change', populateQuizList);
  
  // Listen for clicks on the "Return" button
  returnBtn.addEventListener('click', returnToQuizList);

  // --- 6. Initial Page Load ---
  populateQuizList(); // Run on load to show all quizzes
});