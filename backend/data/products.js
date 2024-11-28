

// backend/data/product.js

const products = [
  {
    id: 1,
    name: "Toppstjärna",
    price: 49.9,
    description:"En julgran är inte komplett förrän den har en stjärna i toppen! Denna stilrena toppstjärna erbjuds i både silvrig och guldig design, och passar perfekt för såväl äkta som konstgjorda granar. Oavsett om du föredrar en traditionell eller modern stil i ditt hem kommer den att bli ett iögonfallande inslag bland dina dekorationer i juletider. Stjärnan är tillverkad av högkvalitativa material som säkerställer att den håller i många år." ,
    stock:50 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/77391068.jpg?ref=4AE2235EF1"
  },
  {
    id: 2,
    name: "Julgranskulor",
    price: 39.9,
    description:"Skapa en förtrollande julstämning med vårt exklusiva 12-pack av klassiska röda julgranskulor. Dessa kulor är perfekta för att skapa en traditionell och tidlös look! Varje kula pryds av unika, vackra mönster och detaljer som fångar och reflekterar ljuset på ett fint sätt. Eftersom de är tillverkade av plast är kulorna både lätta och tåliga, vilket gör dem idealiska för familjer med små barn eller husdjur. För den som önskar en mer modern look finns samma set även tillgängligt i en silvrig nyans." ,
    stock: 34,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1480,format=auto/globalassets/productimages/773014460201-484-p.jpg?ref=25E7AC1C32"
  },
  {
    id: 3,
    name:"Julgranskulor" ,
    price:99.90 ,
    description:"Dekorera granen på ett lekfullt sätt med denna uppsättning av julgranskulor och dekorativa figurer i plast. Setet innehåller en blandning av olika julfigurer som till exempel polkakäppar, tomtar och små julhus, alla designade för att enkelt hängas i granen. Plastmaterialet är lätt och tåligt, vilket gör dekorationerna barnvänliga och mindre ömtåliga än glas. Du kan dessutom välja mellan olika färger på setet och på så vis skapa en personlig look på din gran." ,
    stock: 25 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773014540101-167-p.jpg?ref=04F160771E"
  },
  {
    id:4 ,
    name:"Julgranspynt",
    price: 10,
    description:"Dekorera din julgran på ett innovativt sätt med dessa stilfulla dekorationer i origamistil. I detta set får du 3 stycken stjärnformade julgransdekorationer i tidlösa färger; rött, vitt och grått. Varje stjärna är noggrant vikt i traditionell origamiteknik för att skapa en elegant, geometrisk form som fångar julgransbelysningens sken på ett dekorativt sätt. Det högkvalitativa pappersmaterialet säkerställer i sin tur att dekorationerna behåller sin form, år efter år." ,
    stock: 100,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773912020101-81-p.jpg?ref=91DFC55C24"
  },
  {
    id: 5,
    name:"Julfigur" ,
    price:49.90 ,
    description:"Få till en underbar julstämning med dessa charmiga glasfigurer som blir en fin detalj bland alla dina juldekorationerna. Välj mellan flera färger, storlekar och modeller – allt från en bil med gran på taket till en tomte som kör vespa. Dessa härliga figurer kan hängas i granen, på grenar i en vas eller varför inte i fönstret för att sprida glädje både inne och ute. Med sina lekfulla detaljer och klara färger skapar de en varm och nostalgisk känsla som förhöjer julmyset för alla åldrar." ,
    stock:110 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773014570403-450-p.jpg?ref=72A352CBFD"
  },
  {
    id: 6,
    name:"Julgranspynt Nötknäppare" ,
    price:49.90 ,
    description:"Vad är en jul utan en nötknäppare? De här söta julgransdekorationerna föreställer just nötknäppare, och de kommer att sprida både glädje och en liten nostalgisk känsla i ditt hem under advent och jul. I varje förpackning finns två nötknäppare i klassiska julfärger. Välj två röda, två gröna eller två beigea nötknäppare med många fina detaljer för att pynta din gran. Självklart kan du även dekorera ett fönster med nötknäpparna eller varför inte låta dem bli en vacker bordsdekoration till julmiddagen?" ,
    stock:60 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773912090101-1090-p.jpg?ref=DBBC1C63A7"
  },
  {
    id:7 ,
    name:"Julgranskulor" ,
    price:199 ,
    description:"Skapa en magisk stämning runt julgranen med våra eleganta julkulor av glas! Denna förpackning innehåller totalt 26 kulor i 3 olika storlekar. De kommer i olika röda färgnyanser – samt med matt, blank eller glittrig yta. Kulorna är dessutom dekorerade med en mängd vackra mönster som garanterat drar blickar till sig. Kombinera kulorna med andra dekorationer från Rustas sortiment, eller använd dem på egen hand för att skapa en enhetlig och traditionell stil." ,
    stock:30 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773014350101-1233-p.jpg?ref=5A777E5F4D"
  },
  {
    id:8 ,
    name:"Julfigur" ,
    price: 49.90,
    description:"Få till en underbar julstämning med dessa charmiga glasfigurer som blir en fin detalj bland alla dina juldekorationerna. Välj mellan flera färger, storlekar och modeller – allt från en bil med gran på taket till en tomte som kör vespa. Dessa härliga figurer kan hängas i granen, på grenar i en vas eller varför inte i fönstret för att sprida glädje både inne och ute. Med sina lekfulla detaljer och klara färger skapar de en varm och nostalgisk känsla som förhöjer julmyset för alla åldrar." ,
    stock:50 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773014570401-445-p.jpg?ref=3987BDD114"
  },
  {
    id: 9,
    name:"Julgran Colorado" ,
    price:2099,
    description:"Ge ditt hem en magisk julstämning med den naturtrogna granen Colorado. Denna konstgran har en vacker frostig look med täta, fylliga grenar och fina kottar. Med sin varmvita LED-belysning sprider Colorado ett mjukt, stämningsfullt ljus och blir en imponerande mittpunkt i din juldekoration. Ja, för imponerande är verkligen den här granen i konstmaterial – hela 210 cm hög och totalt 350 små lampor. Med Colorado slipper du både barr och vattning, och granen håller sig lika vacker år efter år. Låt Colorado lysa upp din jul och skapa en ombonad känsla i rummet många jular framöver. Colorado finns också i en mindre modell, 150 cm hög och 170 LED-lampor.Köp vår dimmer till julgranen för att enkelt variera belysningen! Med en vridning på det smarta reglaget kan du anpassa belysningen för varje tillfälle – från ett dämpat, stämningsfullt sken till ett klart och festligt ljus." ,
    stock: 40,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/772311850601-48-p.jpg?ref=3A6AC07915"
  },
  {
    id:10 ,
    name:"Julgranspynt" ,
    price:19.90 ,
    description:"Dessa eleganta rosetter kan användas kreativt i hela ditt hem under julmånaden. De är tillverkade av ett mjukt sammetsmaterial och finns tillgängliga i en harmonisk färgpalett – gräddvitt, mörkrött och gammelrosa. Använd dem för att pryda julkransen, dekorera julgranen eller ge dina julklappar en extra fin touch! Rosetterna är enkla att fästa på önskad plats med hjälp av medföljande clips eller ståltråd." ,
    stock:150 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/771019650102-220-p.jpg?ref=3F17674A3B"
  },
  {
    id: 11,
    name:"Julby Tronden" ,
    price:999 ,
    description:"Skapa julstämning i ditt hem genom att placera ut den förtrollande julbyn Tronden! Denna by i miniatyrformat lär definitivt sprida julglädje inomhus, och kommer att fånga uppmärksamheten hos både stora och små betraktare. Med dess detaljrika byggnader och figurer tar den dig med på en resa till en idyllisk vintervärld. Du kan också välja mellan två inställningar för att anpassa upplevelsen. Låt byn glittra med enbart ljus för en lugn och fridfull atmosfär, eller välj att aktivera såväl musik som rörelse och ljus för en mer livfull och festlig stämning." ,
    stock:20 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/772501930802-19-p.jpg?ref=AFE299607D"
  },
  {
    id:12 ,
    name:"Julby Trondheim" ,
    price:499 ,
    description:"Trondheim är en förtrollande julby i miniatyrformat som sprider glädje och feststämning med musik, rörelser och ljus. Byn har en charmig design med små lampor som lyser upp omgivningen med ett mjukt och varmt sken. I centrum av byn flyger jultomten med sina renar – redo att dela ut julklappar till byns invånare! Den medföljande transformatorn gör i sin tur att installationen blir enkel och smidig." ,
    stock: 25,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/772502400101-93-p.jpg?ref=478D9C1E48"
  },
  {
    id:13 ,
    name:"Julby Trolltindan" ,
    price:199 ,
    description:"Sprid en förtrollande julstämning i hemmet med den charmiga julbyn Trolltindan. Denna batteridrivna minatyrby sprider inte bara ett varmt och inbjudande sken som får rummet att kännas mysigt, utan är också utrustad med unika rörelseeffekter. Placera byn på fönsterbrädan, bokhyllan, eller varför inte låta den vara en del av din julkrubba? Den smarta timerfunktionen gör det enkelt att ställa in när byn ska lysa (6 timmar på/18 timmar av), så att du kan spara på batterierna och samtidigt njuta av den festliga stämningen precis när du vill." ,
    stock: 40,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/772501931001-105-p.jpg?ref=7F26615301"
  },
  {
    id:14 ,
    name:"Julby Holvika" ,
    price: 249,
    description:"En förtrollande juldekoration utformad som en liten julby omsluten av ett stjärnbestrött himlavalv. Byn Holvika är belyst med elva stycken varmvita LED-lampor och mitt i byn står en gran som snurrar. Dekorationen är batteridriven med tre AA 1,5V, vilket gör den lättplacerad eftersom den inte behöver ett eluttag. Ställ den på en hylla i vardagsrummet, på bordet i köket eller kanske i fönstret i barnens rum och skapa en stämningsfull känsla i rummet. Juldekorationen har också en inbyggd timer som släcker belysningen automatiskt efter 6 timmar och tänder den igen efter 18 timmar. Batterier säljs separat." ,
    stock: 20,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/772502690101-449-p.jpg?ref=0252C77302"
  },
  {
    id: 15,
    name:"Adventsstjärna Velvet" ,
    price: 119,
    description:"Ge ditt hem en känsla av lyx med en vacker 7-uddig adventsstjärna i mjuk sammet. Med sin varma, röda färg och imponerande diameter på 60 cm blir den en iögonfallande detalj i ett fönster eller direkt på en vägg. Perfekt för att skapa en inbjudande julstämning i köket, vardagsrummet, sovrummet eller hallen! Den djupa, röda färgen och sammetens textur ger stjärnan en tidlös elegans som passar både moderna och traditionella hem. Låt adventsstjärnan Velvet sprida ett varmt och mysigt sken under hela advents- och julsäsongen." ,
    stock:20 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773211690201-247-p.jpg?ref=FBA0B173BA"
  },
  {
    id:16 ,
    name:"Adventsstjärna Venus" ,
    price:159 ,
    description:"Venus adventsstjärna är en imponerande tredimensionell adventsstjärna som sprider ett vackert och stämningsfullt ljus i ditt hem. Med en diameter på 50 cm blir denna stora pappersstjärna en perfekt dekoration för att lysa upp vintermörkret, antingen i ett fönster eller på en vägg. Julbelysningen finns i tre färgalternativ. Välj om du vill ha en stilren vit julstjärna eller en stjärna i klassiska julfärger: rött eller grönt. Med energieffektiv LED-lampa säkerställer Venus att du får en mysig och hållbar julkänsla utan onödig värmeutveckling." ,
    stock:30 ,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773211930103-478-p.jpg?ref=586D321589"
  },
  {
    id:17 ,
    name:"Adventsstjärna Venus" ,
    price: 159,
    description:"Venus adventsstjärna är en imponerande tredimensionell adventsstjärna som sprider ett vackert och stämningsfullt ljus i ditt hem. Med en diameter på 50 cm blir denna stora pappersstjärna en perfekt dekoration för att lysa upp vintermörkret, antingen i ett fönster eller på en vägg. Julbelysningen finns i tre färgalternativ. Välj om du vill ha en stilren vit julstjärna eller en stjärna i klassiska julfärger: rött eller grönt. Med energieffektiv LED-lampa säkerställer Venus att du får en mysig och hållbar julkänsla utan onödig värmeutveckling." ,
    stock: 40,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773211930101-455-p.jpg?ref=737753DABF"
  }, {
    id:18 ,
    name:"Julgranspynt Houses" ,
    price:24.50 ,
    description:"Dekorera julgranen med tre små hus och skapa en härlig julstämning hemma. Julhängena Houses är tillverkade av porslin och finns i två färgkombinationer: vita hus med gulddetaljer och gråa hus med silverdetaljer. Välj den färg som matchar din inredningsstil och dina övriga julpynt bäst. Dekorationshusen har silver- eller guldfärgade snören för enkel upphängning. Julgransdekorationerna kan också, förutom i julgranen, hängas upp i ett fönster eller på grenar i en vas. Allt för en mysig julkänsla i varje vrå!" ,
    stock: 40,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1480,format=auto/globalassets/productimages/773912080101-392-p.jpg?ref=5204C735DE"
  },
  {
    id:19 ,
    name:"Julgransmatta Lessebo" ,
    price:59.90 ,
    description:"Lägg till en extra touch av julstämning med julgransmattan Lessebo. Mattan kombinerar funktion och fin design i ett! Lessebo är tillverkad av polyester och bomull som skyddar golvet samtidigt som den ramar in julgranen på ett elegant sätt. Den röda julmattan med sitt härliga stjärnmönster passar in i många julhem och inredningsstilar. Placera mattan under granen, och låt den ge rummet en stilfull och mysig känsla som fulländar juldekorationerna och gör varje stund vid granen extra speciell." ,
    stock: 40,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1480,format=auto/globalassets/productimages/773401230102-76-p.jpg?ref=51F230726D"
  },
  {
    id:20 ,
    name:"Kuddfodral Louise" ,
    price:79.90,
    description:"Skapa en lyxig julstämning i hemmet med kuddfodral Louise i mjuk sammet med glittriga lurexränder. Finns i rött och off-white. Kuddfodralet har måtten 48x48 cm för att se extra fyllig ut med en 50x50 cm innerkudde. Innerkudde säljs separat." ,
    stock: 40,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1480,format=auto/globalassets/productimages/502117640101-559-p.jpg?ref=00D896461E"
  },
  {
    id:21 ,
    name:"Blockljus" ,
    price:22.50 ,
    description:"Upptäck våra tvistade blockljus som erbjuder en perfekt kombination av stil och funktion för ditt hem. Ljusen finns tillgängliga i en mångsidig färgpalett – rött, beige, grönt, grått och vitt – så att du enkelt kan matcha dem med din övriga inredning. De är dessutom tillverkade av en högkvalitativ blandning av 90% paraffin och 10% växtvax, vilket ger en ren och jämn förbränning. Dess bomullsveke ger i sin tur en stadig och klar låga som du kan njuta av upp till 55 timmar per ljus." ,
    stock: 40,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=488,format=auto/globalassets/productimages/782015230103-2403-p.jpg?ref=A13ADA32F0"
  },
  {
    id:22 ,
    name:"Adventsljusstake Sundborn" ,
    price:149 ,
    description:"Ge din adventsljusstake en festlig touch med våra fina dekorationer i ett praktiskt 26-pack! Denna mångsidiga samling innehåller 10 bär – 5 vita och 5 röda – som ger en livfull färgklick adventsljusstaken. Utöver bären ingår även 6 charmiga svampar samt 5 söta hjärtan som sprider kärlek och värme. För att fullända dekorationen finns också 5 färgglada äpplen. Dessa dekorationer är tillverkade av olika material, lätta att fästa och kan enkelt kombineras för att passa din stil." ,
    stock: 60,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=780,format=auto/globalassets/productimages/771512870203-34-p.jpg?ref=F7B9C04EDF"
  },
  {
    id:23 ,
    name:"Adventsdekoration" ,
    price:29.90 ,
    description:"Skapa härlig julstämning hemma med denna roliga trollstav! Med en enkel rörelse kan du med hjälp av staven tända och släcka din julgransbelysning. Trollstaven fungerar helt enkelt som en trådlös kontrollenhet som styr en RF-mottagare, vilken enkelt kan placeras mellan din nätadapter och ljusslingan. När du snärtar med staven aktiveras belysningen, och en glittrande ljudeffekt hörs för att förstärka stämningen. För att släcka ljuset igen behöver du bara göra om rörelsen. Trollstaven är batteridriven (batterier säljs separat) och passar de flesta julgransbelysningar." ,
    stock: 40,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1480,format=auto/globalassets/productimages/773111450101-1477-p.jpg?ref=8FDD80D405"
  },
  {
    id:24 ,
    name:"Jultröja LED" ,
    price:249 ,
    description:"Utöka din julgarderob med vår charmiga jultröja – utrustad med 6–8 LED-lampor som lyser i vintermörkret. Den är tillverkad av mjukt och bekvämt material och passar perfekt för både hemmakvällar och festliga tillställningar. Tröjan erbjuds i olika storlekar, och varje storlek pryds av ett unikt och juligt motiv. LED-belysningen kan du givetvis enkelt slå på och av när du vill!" ,
    stock: 40,
    imagePath: "https://www.rusta.com/cdn-cgi/image/quality=60,width=1480,format=auto/globalassets/productimages/771112870302.jpg?ref=F993BF76B8"
  }
];
export default products;

