/* ============================================================
   CURRICULUM — Nederlands B1.2 → C1
   Veel lessen per niveau. Elke les: vocab (drillen) + gesprek
   (spreken met directe feedback).
   ============================================================ */
window.CURRICULUM = [
  /* ===================== B2 ===================== */
  {
    id: "b2", label: "B2 — Nuance & meningen", color: "#2D4A7A",
    lessons: [
      {
        id:"b2l1", title:"Een mening onderbouwen",
        intro:"Verwoord je standpunt genuanceerd in een discussie.",
        vocab:[
          {nl:"het standpunt",en:"the point of view",ex:"Wat is jouw standpunt hierover?"},
          {nl:"onderbouwen",en:"to substantiate",ex:"Kun je dat onderbouwen met feiten?"},
          {nl:"genuanceerd",en:"nuanced",ex:"Hij gaf een genuanceerd antwoord."},
          {nl:"enerzijds, anderzijds",en:"on one hand, on the other",ex:"Enerzijds duur, anderzijds duurzaam."},
        ],
        convo:{scene:"Op kantoor. Een collega vraagt je mening over thuiswerken.",turns:[
          {prompt:"Collega: «Vind jij dat we volledig thuis moeten werken?»",hint:"Geef een genuanceerde mening met 'enerzijds … anderzijds'.",accept:["enerzijds","anderzijds"],model:"Enerzijds werk ik thuis geconcentreerder, anderzijds mis ik het contact met collega's.",note:"Gebruik beide delen om twee kanten te tonen."},
          {prompt:"Collega: «Waarom denk je dat?»",hint:"Onderbouw met 'omdat' + bijzin (werkwoord achteraan).",accept:["omdat"],model:"Ik denk dat omdat ik thuis minder afgeleid word.",note:"Na 'omdat' gaat het werkwoord naar het einde."},
        ]}
      },
      {
        id:"b2l2", title:"Beleefd onderbreken",
        intro:"Val iemand beleefd in de rede tijdens een vergadering.",
        vocab:[
          {nl:"in de rede vallen",en:"to interrupt",ex:"Mag ik je even in de rede vallen?"},
          {nl:"aanvullen",en:"to add to",ex:"Ik wil daar iets op aanvullen."},
          {nl:"het punt",en:"the point",ex:"Dat is een goed punt."},
          {nl:"wat mij betreft",en:"as far as I'm concerned",ex:"Wat mij betreft beginnen we nu."},
        ],
        convo:{scene:"In een vergadering wil je iets toevoegen zonder onbeleefd te zijn.",turns:[
          {prompt:"Voorzitter is aan het woord. Onderbreek beleefd.",hint:"Begin met 'Sorry dat ik je onderbreek, maar …'",accept:["sorry","onderbreek"],model:"Sorry dat ik je onderbreek, maar ik wil hier iets op aanvullen.",note:"Een excuus vooraf maakt het onderbreken beleefd."},
          {prompt:"Voorzitter: «Ga je gang.»",hint:"Geef je punt met 'Wat mij betreft …'",accept:["wat mij betreft"],model:"Wat mij betreft moeten we eerst het budget bespreken.",note:"'Wat mij betreft' introduceert vriendelijk je mening."},
        ]}
      },
      {
        id:"b2l3", title:"Iets vergelijken",
        intro:"Vergelijk opties en spreek voorkeuren uit.",
        vocab:[
          {nl:"in vergelijking met",en:"compared to",ex:"In vergelijking met vorig jaar is het beter."},
          {nl:"de voorkeur geven aan",en:"to prefer",ex:"Ik geef de voorkeur aan de trein."},
          {nl:"het voordeel",en:"the advantage",ex:"Het voordeel is dat het sneller is."},
          {nl:"het nadeel",en:"the disadvantage",ex:"Het nadeel is de prijs."},
        ],
        convo:{scene:"Je plant een reis met een vriend: trein of vliegtuig?",turns:[
          {prompt:"Vriend: «Gaan we met de trein of het vliegtuig?»",hint:"Spreek een voorkeur uit met 'de voorkeur geven aan'.",accept:["voorkeur"],model:"Ik geef de voorkeur aan de trein, want dat is duurzamer.",note:"'De voorkeur geven aan' + lidwoord + zelfstandig naamwoord."},
          {prompt:"Vriend: «Waarom precies?»",hint:"Noem een voordeel met 'het voordeel is dat …'",accept:["voordeel"],model:"Het voordeel is dat je onderweg kunt werken.",note:"Na 'dat' komt het werkwoord weer achteraan."},
        ]}
      },
      {
        id:"b2l4", title:"Twijfel uitdrukken",
        intro:"Geef voorzichtig aan dat je ergens niet zeker van bent.",
        vocab:[
          {nl:"ik betwijfel of",en:"I doubt whether",ex:"Ik betwijfel of dat lukt."},
          {nl:"het hangt ervan af",en:"it depends",ex:"Het hangt ervan af hoe druk het is."},
          {nl:"ik weet het niet zeker",en:"I'm not sure",ex:"Ik weet het niet zeker, eerlijk gezegd."},
          {nl:"misschien",en:"maybe",ex:"Misschien wordt het morgen beter."},
        ],
        convo:{scene:"Een vriend vraagt of je dit weekend kunt afspreken.",turns:[
          {prompt:"Vriend: «Lukt het je zaterdag?»",hint:"Twijfel met 'het hangt ervan af …'",accept:["hangt ervan af"],model:"Het hangt ervan af of ik dan moet werken.",note:"'Het hangt ervan af' + 'of'-bijzin."},
          {prompt:"Vriend: «En zondag dan?»",hint:"Druk onzekerheid uit met 'ik betwijfel of'.",accept:["betwijfel"],model:"Ik betwijfel of dat gaat lukken, want ik heb een verjaardag.",note:"'Betwijfelen of' is netter dan 'ik denk het niet'."},
        ]}
      },
      {
        id:"b2l5", title:"Een klacht indienen",
        intro:"Klaag beleefd maar duidelijk over een product of dienst.",
        vocab:[
          {nl:"een klacht indienen",en:"to file a complaint",ex:"Ik wil een klacht indienen."},
          {nl:"niet naar behoren",en:"not properly",ex:"Het werkt niet naar behoren."},
          {nl:"een oplossing",en:"a solution",ex:"Ik hoop op een snelle oplossing."},
          {nl:"in aanmerking komen voor",en:"to be eligible for",ex:"Kom ik in aanmerking voor een terugbetaling?"},
        ],
        convo:{scene:"Je belt de klantenservice over een kapot apparaat.",turns:[
          {prompt:"Medewerker: «Waarmee kan ik u helpen?»",hint:"Leg het probleem uit met 'niet naar behoren'.",accept:["naar behoren"],model:"Mijn apparaat werkt sinds gisteren niet naar behoren.",note:"'Naar behoren' is formeel en netjes."},
          {prompt:"Medewerker: «Wat verwacht u van ons?»",hint:"Vraag of je 'in aanmerking komt voor' iets.",accept:["in aanmerking"],model:"Ik vraag me af of ik in aanmerking kom voor een vervanging.",note:"Vaste combinatie: 'in aanmerking komen voor'."},
        ]}
      },
    ]
  },

  /* ===================== B2+ ===================== */
  {
    id:"b2c1", label:"B2+ — Abstracte taal", color:"#5C7AAE",
    lessons:[
      {
        id:"b2c1l1", title:"Oorzaak en gevolg",
        intro:"Verbind ideeën met formele verbindingswoorden.",
        vocab:[
          {nl:"bijgevolg",en:"consequently",ex:"Het regende; bijgevolg bleven we thuis."},
          {nl:"te wijten aan",en:"due to (negative)",ex:"De vertraging is te wijten aan het weer."},
          {nl:"te danken aan",en:"thanks to (positive)",ex:"Ons succes is te danken aan het team."},
          {nl:"met het oog op",en:"with a view to",ex:"Met het oog op de toekomst investeren we."},
        ],
        convo:{scene:"Je legt je manager uit waarom een project vertraging heeft.",turns:[
          {prompt:"Manager: «Waarom loopt het project achter?»",hint:"Gebruik 'te wijten aan' voor een negatieve oorzaak.",accept:["te wijten aan"],model:"De vertraging is te wijten aan een tekort aan mensen.",note:"'Te wijten aan' alleen bij negatieve oorzaken."},
          {prompt:"Manager: «En hoe lossen we het op?»",hint:"Kijk vooruit met 'met het oog op'.",accept:["met het oog op"],model:"Met het oog op de deadline huren we een extra collega in.",note:"'Met het oog op' richt de blik op een doel."},
        ]}
      },
      {
        id:"b2c1l2", title:"Concessies maken",
        intro:"Geef toe dat de ander deels gelijk heeft, maar blijf bij je punt.",
        vocab:[
          {nl:"weliswaar",en:"admittedly",ex:"Het is weliswaar duur, maar goed."},
          {nl:"toch",en:"yet / still",ex:"Het regent, maar toch ga ik."},
          {nl:"desondanks",en:"nevertheless",ex:"Hij was ziek; desondanks kwam hij."},
          {nl:"hoewel",en:"although",ex:"Hoewel het laat was, bleef ze."},
        ],
        convo:{scene:"Je bespreekt een aankoop die duur maar goed is.",turns:[
          {prompt:"Vriend: «Die laptop is veel te duur.»",hint:"Geef toe met 'weliswaar … maar …'",accept:["weliswaar"],model:"Hij is weliswaar duur, maar hij gaat zeker vijf jaar mee.",note:"'Weliswaar' kondigt een tegenstelling met 'maar' aan."},
          {prompt:"Vriend: «Toch zou ik wachten op korting.»",hint:"Blijf bij je punt met 'desondanks'.",accept:["desondanks"],model:"Desondanks koop ik hem nu, want ik heb hem meteen nodig.",note:"'Desondanks' staat vooraan; werkwoord komt direct erna."},
        ]}
      },
      {
        id:"b2c1l3", title:"Een proces beschrijven",
        intro:"Beschrijf stappen helder en in de juiste volgorde.",
        vocab:[
          {nl:"vervolgens",en:"subsequently",ex:"Vervolgens meng je de ingrediënten."},
          {nl:"ten slotte",en:"finally",ex:"Ten slotte zet je de oven aan."},
          {nl:"zodra",en:"as soon as",ex:"Zodra het kookt, draai je het laag."},
          {nl:"ervoor zorgen dat",en:"to ensure that",ex:"Zorg ervoor dat alles klaarstaat."},
        ],
        convo:{scene:"Je legt een collega uit hoe een aanvraag werkt.",turns:[
          {prompt:"Collega: «Hoe dien ik een aanvraag in?»",hint:"Beschrijf een stap met 'vervolgens'.",accept:["vervolgens"],model:"Eerst vul je het formulier in; vervolgens stuur je het op.",note:"'Vervolgens' verbindt twee stappen netjes."},
          {prompt:"Collega: «En dan?»",hint:"Sluit af met 'ten slotte' en 'ervoor zorgen dat'.",accept:["ten slotte"],model:"Ten slotte zorg je ervoor dat je manager akkoord geeft.",note:"'Ervoor zorgen dat' + bijzin met werkwoord achteraan."},
        ]}
      },
      {
        id:"b2c1l4", title:"Hypotheses formuleren",
        intro:"Praat over wat zou kunnen gebeuren (voorwaardelijke wijs).",
        vocab:[
          {nl:"stel dat",en:"suppose that",ex:"Stel dat het misgaat, wat dan?"},
          {nl:"zou kunnen",en:"could / might",ex:"Dat zou kunnen werken."},
          {nl:"in dat geval",en:"in that case",ex:"In dat geval bel ik je."},
          {nl:"naar verwachting",en:"as expected / projected",ex:"Naar verwachting groeit het bedrijf."},
        ],
        convo:{scene:"Je bespreekt een risico in een projectplan.",turns:[
          {prompt:"Collega: «En als de leverancier te laat is?»",hint:"Formuleer een hypothese met 'stel dat'.",accept:["stel dat"],model:"Stel dat de leverancier te laat is, dan schuiven we de lancering op.",note:"'Stel dat …, dan …' is de klassieke hypothese-structuur."},
          {prompt:"Collega: «Dat zou veel kosten.»",hint:"Reageer met 'in dat geval'.",accept:["in dat geval"],model:"In dat geval zoeken we een tweede leverancier als reserve.",note:"'In dat geval' verwijst terug naar de zojuist genoemde situatie."},
        ]}
      },
      {
        id:"b2c1l5", title:"Samenvatten en concluderen",
        intro:"Vat een gesprek bondig samen en trek een conclusie.",
        vocab:[
          {nl:"kortom",en:"in short",ex:"Kortom, het plan werkt."},
          {nl:"al met al",en:"all in all",ex:"Al met al een goede dag."},
          {nl:"de conclusie trekken",en:"to draw the conclusion",ex:"We kunnen de conclusie trekken dat…"},
          {nl:"samenvattend",en:"to summarise",ex:"Samenvattend stel ik voor om door te gaan."},
        ],
        convo:{scene:"Aan het einde van een vergadering vat je alles samen.",turns:[
          {prompt:"Voorzitter: «Kun je het even samenvatten?»",hint:"Begin met 'samenvattend' of 'kortom'.",accept:["samenvattend"],model:"Samenvattend zijn we het eens over het budget en de planning.",note:"'Samenvattend' opent een nette samenvatting."},
          {prompt:"Voorzitter: «Dus wat is de conclusie?»",hint:"Trek een conclusie met 'al met al'.",accept:["al met al"],model:"Al met al kunnen we volgende week beginnen.",note:"'Al met al' weegt alles samen tot één oordeel."},
        ]}
      },
    ]
  },

  /* ===================== C1 ===================== */
  {
    id:"c1", label:"C1 — Vloeiend & idiomatisch", color:"#D6541F",
    lessons:[
      {
        id:"c1l1", title:"Idiomatische uitdrukkingen",
        intro:"Klink als een moedertaalspreker met levende uitdrukkingen.",
        vocab:[
          {nl:"de kat uit de boom kijken",en:"to wait and see",ex:"Ik kijk eerst de kat uit de boom."},
          {nl:"het hoofd bieden",en:"to cope with",ex:"We moeten de crisis het hoofd bieden."},
          {nl:"in de smaak vallen",en:"to be well received",ex:"Het plan viel goed in de smaak."},
          {nl:"de knoop doorhakken",en:"to make the call",ex:"Laten we de knoop doorhakken."},
        ],
        convo:{scene:"Je bespreekt een lastige beslissing met een vriend.",turns:[
          {prompt:"Vriend: «Doe je mee met dat nieuwe project?»",hint:"Zeg dat je het afwacht — met een uitdrukking.",accept:["kat uit de boom"],model:"Ik kijk eerst nog even de kat uit de boom.",note:"Mooie idiomatische keuze — precies C1."},
          {prompt:"Vriend: «Maar je moet snel kiezen.»",hint:"Gebruik 'de knoop doorhakken'.",accept:["knoop","doorhak"],model:"Je hebt gelijk, ik hak vanavond de knoop door.",note:"'De knoop doorhakken' = een definitieve keuze maken."},
        ]}
      },
      {
        id:"c1l2", title:"Diplomatiek onderhandelen",
        intro:"Onderhandel zakelijk zonder de relatie te schaden.",
        vocab:[
          {nl:"een compromis sluiten",en:"to reach a compromise",ex:"Laten we een compromis sluiten."},
          {nl:"tegemoetkomen aan",en:"to accommodate",ex:"We komen u graag tegemoet."},
          {nl:"de marge",en:"the margin / leeway",ex:"Er zit nog wat marge in de prijs."},
          {nl:"onder voorbehoud van",en:"subject to",ex:"Akkoord, onder voorbehoud van goedkeuring."},
        ],
        convo:{scene:"Je onderhandelt over een contract met een klant.",turns:[
          {prompt:"Klant: «De prijs is te hoog voor ons.»",hint:"Bied ruimte met 'tegemoetkomen aan'.",accept:["tegemoet"],model:"We kunnen u tegemoetkomen met vijf procent korting.",note:"'Tegemoetkomen aan' toont flexibiliteit zonder zwakte."},
          {prompt:"Klant: «En kunnen we dat vastleggen?»",hint:"Geef een voorwaardelijk akkoord met 'onder voorbehoud van'.",accept:["onder voorbehoud"],model:"Akkoord, maar onder voorbehoud van goedkeuring door mijn directeur.",note:"Formele manier om een voorwaarde te stellen."},
        ]}
      },
      {
        id:"c1l3", title:"Abstracte begrippen bespreken",
        intro:"Discussieer over abstracte thema's zoals vrijheid en ethiek.",
        vocab:[
          {nl:"in wezen",en:"essentially",ex:"In wezen gaat het om vertrouwen."},
          {nl:"de verhouding",en:"the relationship / ratio",ex:"De verhouding tussen vrijheid en veiligheid."},
          {nl:"een afweging maken",en:"to weigh up",ex:"We moeten een afweging maken."},
          {nl:"ten koste van",en:"at the expense of",ex:"Groei mag niet ten koste van mensen gaan."},
        ],
        convo:{scene:"Een filosofisch gesprek over privacy en veiligheid.",turns:[
          {prompt:"Vriend: «Meer camera's maken de stad veiliger.»",hint:"Nuanceer met 'ten koste van'.",accept:["ten koste van"],model:"Misschien, maar dat gaat ten koste van onze privacy.",note:"'Ten koste van' benoemt wat je opoffert."},
          {prompt:"Vriend: «Dus wat stel je voor?»",hint:"Gebruik 'een afweging maken'.",accept:["afweging"],model:"We moeten een zorgvuldige afweging maken tussen beide belangen.",note:"'Een afweging maken' = bewust voors en tegens wegen."},
        ]}
      },
      {
        id:"c1l4", title:"Subtiele emoties verwoorden",
        intro:"Druk gemengde of subtiele gevoelens genuanceerd uit.",
        vocab:[
          {nl:"gemengde gevoelens",en:"mixed feelings",ex:"Ik heb er gemengde gevoelens over."},
          {nl:"opgelucht",en:"relieved",ex:"Ik ben opgelucht dat het voorbij is."},
          {nl:"teleurgesteld",en:"disappointed",ex:"Ik ben een beetje teleurgesteld."},
          {nl:"het valt me zwaar",en:"I find it hard",ex:"Het valt me zwaar om afscheid te nemen."},
        ],
        convo:{scene:"Een collega vertelt dat ze van baan verandert.",turns:[
          {prompt:"Collega: «Ik ga ergens anders werken!»",hint:"Reageer eerlijk met 'gemengde gevoelens'.",accept:["gemengde gevoelens"],model:"Wat goed voor je! Ik heb er wel gemengde gevoelens over, want ik ga je missen.",note:"'Gemengde gevoelens' toont emotionele nuance — heel C1."},
          {prompt:"Collega: «Ik zal jullie ook missen.»",hint:"Druk uit dat iets moeilijk is met 'het valt me zwaar'.",accept:["valt me zwaar"],model:"Het valt me zwaar, maar ik gun je deze stap van harte.",note:"'Het valt me zwaar om …' + te + infinitief."},
        ]}
      },
      {
        id:"c1l5", title:"Een betoog houden",
        intro:"Bouw een overtuigend, gestructureerd argument op.",
        vocab:[
          {nl:"ten eerste / ten tweede",en:"firstly / secondly",ex:"Ten eerste is het goedkoper."},
          {nl:"daar komt bij dat",en:"moreover",ex:"Daar komt bij dat het sneller is."},
          {nl:"het zwaarwegende argument",en:"the compelling argument",ex:"Het zwaarwegendste argument is veiligheid."},
          {nl:"valt niet te ontkennen",en:"cannot be denied",ex:"Het valt niet te ontkennen dat het werkt."},
        ],
        convo:{scene:"Je pleit in een vergadering voor een nieuw beleid.",turns:[
          {prompt:"Manager: «Overtuig me waarom we dit moeten doen.»",hint:"Open gestructureerd met 'ten eerste'.",accept:["ten eerste"],model:"Ten eerste bespaart het tijd, en ten tweede verhoogt het de kwaliteit.",note:"Nummering maakt een betoog helder en sterk."},
          {prompt:"Manager: «Klinkt mooi, maar is er bewijs?»",hint:"Versterk met 'valt niet te ontkennen'.",accept:["valt niet te ontkennen"],model:"Het valt niet te ontkennen dat de cijfers een duidelijke verbetering laten zien.",note:"Krachtige formulering om je punt te bekrachtigen."},
        ]}
      },
      {
        id:"c1l6", title:"Spreektaal & register wisselen",
        intro:"Schakel soepel tussen informeel en formeel taalgebruik.",
        vocab:[
          {nl:"even kort sluiten",en:"to quickly sync up (informal)",ex:"Zullen we het even kort sluiten?"},
          {nl:"afstemmen",en:"to coordinate (formal)",ex:"Ik wil dit graag met u afstemmen."},
          {nl:"gezellig",en:"cosy / pleasant",ex:"Het was een gezellige avond."},
          {nl:"naar tevredenheid",en:"satisfactorily",ex:"Het is naar tevredenheid afgerond."},
        ],
        convo:{scene:"Eerst een appje aan een collega, daarna een mail aan een klant.",turns:[
          {prompt:"Informeel appje aan je collega Sanne.",hint:"Houd het luchtig met 'even kort sluiten'.",accept:["even"],model:"Hé Sanne, zullen we morgen even kort sluiten over de planning?",note:"Informeel register: kort, 'je', losse toon."},
          {prompt:"Nu een formele mail aan de klant.",hint:"Schakel naar formeel met 'afstemmen' / 'naar tevredenheid'.",accept:["afstemmen","tevredenheid"],model:"Geachte heer De Vries, ik wil de planning graag met u afstemmen, zodat alles naar tevredenheid verloopt.",note:"Formeel register: 'u', volledige zinnen, beleefdheidsformules."},
        ]}
      },
    ]
  }
];
