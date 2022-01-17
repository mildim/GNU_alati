const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const finalScore = document.querySelector('#fscore');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availabelQuestions = [];

let questions = [
    {
        question: "Šta naredna rečenica opisuje: \" Prozor u kome su aktivni vaši programi u tekstualnom režimu.\"?",
        choice1: "zaglavlje",
        choice2: "konzola",
        choice3: "shell",
        choice4: "komandna linija",
        answer: 2,

    },
    {
        question: "Koja je opšta forma svake komande na Linux sitemu?",
        choice1: "command [opcija][opcija][opcija]",
        choice2: "command [argumenti] ",
        choice3: "command [opcija][argumenti]",
        choice4: "command opcija",
        answer: 2,

    },
    {
        question: "Čemu služi naredna komanda? \n man -I [ime_komande]",
        choice1: "ispisuje sve man stranice navedene komande sukcesivno",
        choice2: "ispisuje broj sekcije u kojoj je komanda prisutna",
        choice3: "daje nam lokaciju gde se man stranica za navedenu komandu nalazi",
        choice4: "komanda čije ime se navodi postaje `case-sensitive`",
        answer: 4,

    },
    {
        question: "Šta od navedenog nije sekcija u man stranici? ",
        choice1: "AUTHOR",
        choice2: "EXAMPLES",
        choice3: "RETURN VALUE",
        choice4: "Sve navedene",
        answer: 4,

    },
    {
        question: "Linux komanda koja štampa apsolutnu putanju do trenutnog radnog direktorijuma je: ",
        choice1: "mv ",
        choice2: "rm ",
        choice3: "pwd ",
        choice4: "dir ",
        answer: 3,

    },
    {
        question: "Koja od narednih komandi dozvoljava prelazak u roditeljski direktorijum? ",
        choice1: "cd - ",
        choice2: "cd ~ ",
        choice3: "cd / ",
        choice4: "cd .. ",
        answer: 4,

    },
    {
        question: "Koja od narednih komandi stvara prazan fajl, ukoliko on već ne postoji? ",
        choice1: "ed ",
        choice2: "touch ",
        choice3: "read ",
        choice4: "cat ",
        answer: 2,

    },
    {
        question: "Koje je ime Linux komande koja se koristi za brisanje fajlova i direktorijuma? ",
        choice1: "rm ",
        choice2: "mv ",
        choice3: "ps ",
        choice4: "ls ",
        answer: 1,

    },
    {
        question: "Šta će uraditi naredna komanda  cp ../file  ",
        choice1: "kopira fajl iz roditeljkog direktorijuma u trenutni direktorijum ",
        choice2: "kopira fajl iz roditeljkog direktorijuma u njegov roditeljski direktorijum ",
        choice3: "kopira fajl iz trenutnog direktorijuma u roditeljski direktorijum ",
        choice4: "komanda dovodi do greške ",
        answer: 1,

    },
    {
        question: "Komanda koja će prikazati sve skrivene fajlove radnog direktorijuma je: ",
        choice1: "cd -h ",
        choice2: "ls -h ",
        choice3: "chmod -a ",
        choice4: "ls -a ",
        answer: 4,

    },
    {
        question: "Koja komanda se ne ubraja u Linux komande za upravljanje fajlovima? ",
        choice1: "rm ",
        choice2: "echo ",
        choice3: "cp ",
        choice4: "chmod ",
        answer: 2,

    },
    {
        question: "Koja je uloga Linux chown komande? ",
        choice1: "da se promeni Linux \'prompt\' ",
        choice2: "da poredi sadržaj dva fajla ",
        choice3: "da promeni vlasništvo nad fajlom ",
        choice4: "da promeni pristupne dozvole ",
        answer: 3,

    },
    {
        question: "Čemu služi naredna komanda? \ncat ime_fajla1  > ime_fajla2",
        choice1: "da bi nadovezali sadržaj jednog fajla na sadržaj drugog ",
        choice2: "da bi pregledali sadržaj više fajlova odjednom ",
        choice3: "da bi preimenovali fajl1 u fajl2 ",
        choice4: "da bi kopirali sadržaj jednog fajla u drugi ",
        answer: 4,

    },
    {
        question: "Koja od narednih komandi nam omogućava da prekinemo trenutni proces na Linux sistemu? ",
        choice1: "Ctrl + C ",
        choice2: "Ctrl + T ",
        choice3: "Ctrl + X ",
        choice4: "Ctrl + A ",
        answer: 1,

    },
    {
        question: "Ako se ne navede drugacije, rezultat kompilacije je izvršni fajl sa generičkim imenom ",
        choice1: "a.out ",
        choice2: "a.exe ",
        choice3: "x.out ",
        choice4: "x.exe ",
        answer: 1,

    },
    {
        question: "Ispravan redosled faza kompilacije je ",
        choice1: "pretprocesiranje -> kompilacija -> asembliranje -> povezivanje ",
        choice2: "asembliranje -> pretprocesiranje -> kompilacija -> povezivanje ",
        choice3: "pretprocesiranje -> asembliranje -> kompilacija -> povezivanje ",
        choice4: "ništa od ponuđenog ",
        answer: 1,

    },
    {
        question: "Pretprocesor kreira datoteku sa ekstenzijom ",
        choice1: ".a ",
        choice2: ".i ",
        choice3: ".s ",
        choice4: ".o ",
        answer: 2,

    },
    {
        question: "Pretprocesor uklanja _______ iz izvornog koda. ",
        choice1: "datoteke zaglavlja ",
        choice2: "i komentare i datoteke zaglavlja ",
        choice3: "komentare ",
        choice4: "ništa od ponuđenog ",
        answer: 3,

    },
    {
        question: "Ekspanzija makroa vrši se u fazi ",
        choice1: "povezivanja ",
        choice2: "kompilacije  ",
        choice3: "asembliranja ",
        choice4: "pretprocesiranja ",
        answer: 4,

    },
    {
        question: "Koja komandna opcija se koristi za generisanje asemblerskog koda? ",
        choice1: "-asm ",
        choice2: "-S ",
        choice3: "-o ",
        choice4: "-c ",
        answer: 2,

    },
    {
        question: "Asemblerski kod se konvertuje u objektni kod na mašinkom jeziku od strane ",
        choice1: "kompajlera ",
        choice2: "asemblera ",
        choice3: "povezivača ",
        choice4: "ništa od ponuđenog ",
        answer: 2,

    },
    {
        question: "Koja je uloga povezivača? ",
        choice1: "Kompajlira kod ",
        choice2: "Ispituje ispravnost sintakse ",
        choice3: "Konvertuje objektni kod na mašinskom jeziku u izvršivi fajl na mašinskom jeziku. ",
        choice4: "Ništa od ponuđenog ",
        answer: 3,

    },
    {
        question: "Koja komandna opcija omogućava generisanje poruka o greškama? ",
        choice1: "-g ",
        choice2: "-a ",
        choice3: "-e ",
        choice4: "-b ",
        answer: 1,

    },
    {
        question: "Koja komandna opcija omogućava uključivanje svih upozorenja? ",
        choice1: "-W ",
        choice2: "-w ",
        choice3: "-Wall ",
        choice4: "-wall ",
        answer: 3,

    },
    {
        question: "Komapnda opcija -Wextra  ",
        choice1: "ista je kao komandna opcija -w ",
        choice2: "ne postoji ",
        choice3: "pruža dodatna upozorenja ",
        choice4: "ista je kao komandna opcija -Wall ",
        answer: 3,

    },
    {
        question: "Koja je uloga -Werror komandne opcije? ",
        choice1: "Ignoriše sve greške. ",
        choice2: "Prijavljuje sva upozorenja kao greške. ",
        choice3: "Prikuplja sve greške u zasebnu datoteku. ",
        choice4: "Dodatno opisuje greške. ",
        answer: 2,

    },
    {
        question: "Koja komapnda opcija uklanja definiciju makroa? ",
        choice1: "-U ",
        choice2: "-delete ",
        choice3: "-u ",
        choice4: "-undefine ",
        answer: 1,

    },
    {
        question: "Komandna opcija -H ",
        choice1: "ignoriše datoteke zaglavlja koje izvorni kod ne zahteva ",
        choice2: "koristi se za uključivanje datoteka zaglavlja ",
        choice3: "štampa imena svih datoteka zaglavlja ",
        choice4: "daje pomoć za navedeni argument ",
        answer: 3,

    },
    {
        question: "Koja komandna opcija povezuje datoteke zaglavlja zadate putanjom?  ",
        choice1: "-l ",
        choice2: "-L ",
        choice3: "-link ",
        choice4: "-connect ",
        answer: 2,

    },
    {
        question: "Koja vrsta shell - a je dostupna na Linux sistemima? ",
        choice1: "C Shell ",
        choice2: "B Shell ",
        choice3: "Bin Shell ",
        choice4: "Chrome Shell ",
        answer: 1,

    },
    {
        question: "Kojom linijom mora početi svaki Bash skript: ",
        choice1: "#!/bash ",
        choice2: "#/bin/bash ",
        choice3: "#! /bin/bash ",
        choice4: "#!/bin/bash ",
        answer: 4,

    },
    {
        question: "Ukoliko želite da ispišete sadržaj fajla primer.sh napisanom na Bash programskom jeziku, na standardni izlaz koristimo komandu: ",
        choice1: "ls primer.sh ",
        choice2: "mkdir primer.sh ",
        choice3: "cd primer.sh ",
        choice4: "echo primer.sh ",
        answer: 4,

    },
    {
        question: "Koju komandu koristimo da bi fajlu primer.sh dodelili dozvolu za izvršavanje? ",
        choice1: "chmod +x primer.sh ",
        choice2: "chmod +u  primer.sh ",
        choice3: "chmod -x primer.sh ",
        choice4: "chmod -u primer.sh ",
        answer: 1,

    },
    {
        question: "U našem Bash skriptu imamo narednu liniju koda, gde promenljivoj a dodeljujemo vrednost:\na=apple\nUkoliko želimo da ispišemo vrednost promenljive a, koristimo sintaksu: ",
        choice1: "\"\'$a\'\" ",
        choice2: "\'$a\' ",
        choice3: "$a ",
        choice4: "\"$a\" ",
        answer: 4,

    },
    {
        question: "Komada koju koristimo ukoliko želimo da saznamo koje sistemske promenljive postoje na našem sistemu je: ",
        choice1: "print ",
        choice2: "env ",
        choice3: "printset ",
        choice4: "otp ",
        answer: 2,

    },
    {
        question: "Ukoliko u našem skriptu imamo liniju koda  echo $@ ona ispisuje: ",
        choice1: "ime skripta koji se poziva ",
        choice2: "ukupan broj argumenata komandne linije ",
        choice3: "ID trenutnog skripta ",
        choice4: "listu argumenata u formi niza ",
        answer: 4,

    },
    {
        question: "Da bismo prikazali datum u formatu DD-Month, YYYY koristimo komandu: ",
        choice1: "date +%A %d-%B, %Y ",
        choice2: "date +%m-%d, %Y ",
        choice3: "date +%a %d-%b, %Y ",
        choice4: "date +%F ",
        answer: 1,

    },
    {
        question: "Šta štampa naredni kod?\nif [ 40 -eq 90 ];\nthen\n\techo 'Uspeh!'\nfi ",
        choice1: "Uspeh! ",
        choice2: "kod izbacuje grešku ",
        choice3: "0 ",
        choice4: "kod ne štampa ništa ",
        answer: 4,

    },
    {
        question: "Šta vraća naredni kod? \nmacke () {\n\techo \"Meow\"\n\treturn 42}\ncats\necho $? ",
        choice1: "Meow ",
        choice2: "0 ",
        choice3: "42 ",
        choice4: "funkcija izbacuje grešku ",
        answer: 3,

    },
    {
        question: "Šta vraća naredni kod?\nadd () {\n\tresult=$(( $1 + $2 ))}\nadd 3 4\necho $result  ",
        choice1: "4 ",
        choice2: "7 ",
        choice3: "3 ",
        choice4: "0 ",
        answer: 2,

    },
    {
        question: "Objasnite šta štampa naredni kod\nn=\nif [ -z $ ]; then\n\techo \"ovo se stampa ako je uslov tacan\"\nelse\n\techo \"ovo se stampa ako uslov netacan\"\nfi",
        choice1: "funkcija vraća grešku ",
        choice2: "ovo se štampa ako je uslov tačan ",
        choice3: "ovo se štampa ako je uslov netačan ",
        choice4: "funkcija vraća 0 ",
        answer: 2,

    },
    {
        question: "Koju komandu koristimo da bi odštampali svaki element niske:\nvoce=(jabuka kruska jagoda dinja ananas)",
        choice1: "echo ${voce[@]} ",
        choice2: "echo ${#voce[@]} ",
        choice3: "declare -p voce ",
        choice4: "echo ${voce[*]} ",
        answer: 1,

    },

    {
        question: "Da bismo izbrisali ceo niz koristimo komandu: ",
        choice1: "delete -p ime_niza ",
        choice2: "unset -p ime_niza ",
        choice3: "unset ime_niza ",
        choice4: "delete ime_niza ",
        answer: 3,

    },
    {
        question: "Za koju vrstu grešaka je pogodno koristiti debagere za detekciju? ",
        choice1: "leksičke greške ",
        choice2: "greške prilikom izvršavanja programa ",
        choice3: "sintaksičke greške ",
        choice4: "ni jedne od navedenih ",
        answer: 2,

    },
    {
        question: "Označiti tačno tvrđenje: ",
        choice1: "GDB najčešće ne dolazi isporučen u okviru GNU/Linux distribucija pa ga je neophodno eksplicitno instalirati ",
        choice2: "nakon popravljanja greške u kodu nije neophodno ponovno prevođenje pograma da bi se nastavilo sa debagovanjem tj. GDB sam izvršava prevođenje novog izvornog programa ",
        choice3: "upotrebljava se isključivo za debagovanje programskih jezika C i C++ ",
        choice4: "neophodno je prevesti program sa opcijom -g da bi bilo moguće debagovanje ",
        answer: 4,

    },
    {
        question: "Na koji od navedenih načina NE možemo pokrenuti GDB iz terminala: ",
        choice1: "gdb ",
        choice2: "gdb naziv_izvornog_fajla ",
        choice3: "gdb naziv_izvršnog_fajla ",
        choice4: "gdb ID_procesa ",
        answer: 2,

    },
    {
        question: "Ukoliko želimo da se program zaustavi svaki put kada određena promenljiva promeni vrednost, najbolje je: ",
        choice1: "postavljati tačku prekida na svakoj liniji gde se pojavljuje data promenljiva  ",
        choice2: "postaviti tačku prekida samo na prvom pojavljivanju date promenljive ",
        choice3: "postaviti tačku nadgledanja na prvom pojavljivanju date promenljive ",
        choice4: "postaviti tačku hvatanja na prvom pojavljivanju date promenljive ",
        answer: 3,

    },
    {
        question: "Kada želimo tačku prekida da upotrebimo samo jednom i nakon toga da se obriše, koristimo komandu: ",
        choice1: "break ",
        choice2: "hbreak ",
        choice3: "rbreak ",
        choice4: "tbreak ",
        answer: 4,

    },
    {
        question: "Ukoliko želimo da debagujemo funkciju čije se ime nalazi u tekućoj liniji (linija do koje smo stigli sa debagovanjem) koristimo komandu: ",
        choice1: "continue ",
        choice2: "step ",
        choice3: "next ",
        choice4: "run ",
        answer: 2,

    },
    {
        question: "Kada želimo da sa jedne tačke prekida pređemo na drugu u procesu debagovanja, koristimo komandu: ",
        choice1: "continue ",
        choice2: "next ",
        choice3: "run ",
        choice4: "step ",
        answer: 1,

    },
    {
        question: "Označiti tačna tvrđenja: ",
        choice1: "Emacs je jedino integrisano razvojno okruženje koje koristi GDB kao ugrađeni debager ",
        choice2: "GDB nije konzolni alat ",
        choice3: "TUI je tekstulano korisničko okruženje koje olakšava proces debagovanja ",
        choice4: "TUI i Emacs su jedina integrisana razvojna okruženja koja koriste GDB kao ugrađeni debager ",
        answer: 3,

    },
    {
        question: "Tačka prekida se u TUI okruženju prikazuje: ",
        choice1: "sa jednim simbolom B ",
        choice2: "sa dva simbola ",
        choice3: "samo je obojena linija u kojoj se nalazi tačka prekida ",
        choice4: "isticanjem linije korišćenjem simbola \'>\' ",
        answer: 2,

    },
    {
        question: "Koji prozori ne mogže biti vidljiv u isto vreme u TUI režimu: ",
        choice1: "izvorni i asemblerski ",
        choice2: "izvorni i registarski ",
        choice3: "izvorni, asemblerski i registarski  ",
        choice4: "asemblerski i registarski ",
        answer: 3,

    },
    {
        question: "Označiti tvrđenja koja su tačna prilikom korišćenja Emacs razvojnog okruženja: ",
        choice1: "da bismo koristili komande za debagovanje neophodno ih je navoditi u komandnom prozoru ",
        choice2: "moguće je imati uvid u prozvoljnu kombinaciju prozora (prozor sa izvornim kodom, komandni, za ulaz/izlaz, registarski, za lokalne promenljive, za niti, za prikazivanje tačaka prekida i za prikazivanje postojećih stek okvira) ",
        choice3: "debagovanje je u potpunosti automatizovano (tj. svaka komanda GDB-a je ugrađena u samom okruženju) ",
        choice4: "nije moguće ručno postavljanje tačaka prekida ",
        answer: 2,

    },
    {
        question: "Debagovanje dete procesa je moguće ukoliko se za njegovo kreiranje koristio: ",
        choice1: "fork ili exec sistemski poziv ",
        choice2: "isključivo fork sistemski poziv ",
        choice3: "isključivo exec sistemski poziv ",
        choice4: "isključivo fork u kombinaciji za exec-om ",
        answer: 1,

    },
    {
        question: "Označiti tvrđenje koje je tačno prilikom debagovanja u višeprocesnom okruženju: ",
        choice1: "moguće je istovremeno debagovati više procesa ",
        choice2: "da bismo debagovali drugi proces dovoljno je postaviti tačku prekida na liniju u kojoj se kreira dati proces ",
        choice3: "za debagovanje dete procesa od velike pomoći može biti funkcija sleep ",
        choice4: "funkcija sleep ne može biti od velike pomoći za debagovanje dete procesa",
        answer: 3,

    },
    {
        question: "Koju pogodnost GDB pruža pri višenitnom debagovanju: ",
        choice1: "informacije o nitima, njihov ID, naziv i slično ",
        choice2: "koja nit je u koje vreme nastala ",
        choice3: "moguće je istovremeno debagovati više niti ",
        choice4: "ni jednu od navedenih ",
        answer: 1,

    },
    {
        question: "Označiti tvrđenje koje nije tačno prilikom debagovanja u višenitnom okruženju: ",
        choice1: "moguće je promeniti sistemski dodeljen naziv niti ",
        choice2: "moguće je primeniti komandu na sve niti istovremeno korišćenjem odgovarajuće naredbe ",
        choice3: "zaustavljanje programa zaustavljanja izvršavanje samo tekuće niti koja se debaguje ",
        choice4: "da bismo prešli sa jedne niti na drugu dovoljno nam je da znamo PID druge niti ",
        answer: 3,

    },
    {
        question: "Šta je makefile? ",
        choice1: "Makefile komandi make opisuje način kompilacije programa. ",
        choice2: "Makefile sadrži različite izjave vezane za kompilaciju cilja. ",
        choice3: "Makefile sadrži različite izjave. ",
        choice4: "Makefile komandi make opisuje debagovanje programa ",
        answer: 1,

    },
    {
        question: "Kada pokrećemo komandu make u terminalu ",
        choice1: "make čita makefile u roditeljskom direktorijumu ",
        choice2: "make čita makefile u trenutnom direktorijumu ",
        choice3: "make čita makefile u unapred definisanoj promenljivoj okruženja ",
        choice4: "make čita makefile na definisanoj putanji ",
        answer: 2,

    },
    {
        question: "Ako se komanda make izvrši kao \"make -j 2\", onda ",
        choice1: "prijaviće grešku ",
        choice2: "samo dva posla će biti izvršena ",
        choice3: "dva posla će se obaviti istovremeno ",
        choice4: "se ništa neće desiti ",
        answer: 3,

    },
    {
        question: "Ako želimo da izvršimo makefile samo davanjem komande make, koji od navedenih naziva ne bi bio ispravan ",
        choice1: "makefile ",
        choice2: "Makefile ",
        choice3: "MAKEFILE ",
        choice4: "GNUmakefile ",
        answer: 3,

    },
    {
        question: "Šta je lažni cilj u makefile-u? ",
        choice1: "cilj koji nije ime datoteke ",
        choice2: "cilj koji je ime datoteke ",
        choice3: "cilj koji se ne koristi za kompilaciju ",
        choice4: "ni jedno od navedenog ",
        answer: 1,

    },
    {
        question: "Pokretanje komande make bez argumenata pokreće ______ cilj u makefile-u. ",
        choice1: ".PHONY ",
        choice2: "clean ",
        choice3: "poslednji ",
        choice4: "prvi ",
        answer: 4,

    },
    {
        question: "Šta od sledećeg može da se koristi za određivanje direktorijuma za pretragu zavisnosti i ciljnih datoteka? ",
        choice1: "CPATH ",
        choice2: "VPATH ",
        choice3: "FPATH ",
        choice4: "WPATH ",
        answer: 2,

    },
    {
        question: "Makroi za makefile mogu se definisati ",
        choice1: "u makefile-u ",
        choice2: "u komandnoj liniji ",
        choice3: "i u makefile-u i u komandnoj liniji ",
        choice4: "ni u jednom od navedenih ",
        answer: 3,

    },
    {
        question: "U makefile-u komentari počinju karakterom ",
        choice1: "/* ",
        choice2: "// ",
        choice3: "# ",
        choice4: "$ ",
        answer: 3,

    },
    {
        question: "U makefile-u ciljevi i preduslovi odvojeni su karakterom  ",
        choice1: "- ",
        choice2: ": ",
        choice3: ":= ",
        choice4: "@ ",
        answer: 2,

    },
    {
        question: "Šta predstavlja CLEAN u sledećem primeru?\nCLEAN = rm\nLIBRARY = libutil\nRM:\n\t$(CLEAN) *.o *.out $(LIBRARY) core ",
        choice1: "promenljiva  ",
        choice2: "preduslov  ",
        choice3: "cilj ",
        choice4: "konstanta ",
        answer: 1,

    },
    {
        question: "Šta od ponuđenog obezbeđuje sve preduslove za makefile? ",
        choice1: "$* ",
        choice2: "$@ ",
        choice3: "$^ ",
        choice4: "$? ",
        answer: 3,

    },
    {
        question: "Šta se koristi za ime ciljne datoteke u makefile-u? ",
        choice1: "$* ",
        choice2: "$^ ",
        choice3: "$? ",
        choice4: "$@ ",
        answer: 4,

    },
    {
        question: "Koje od sledećih naredbe će kompajlirati kod sa makefileom pod nazivom „google“: ",
        choice1: "make -a google ",
        choice2: "make -f google ",
        choice3: "make -l google ",
        choice4: "make -file google  ",
        answer: 2,

    },

]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 20;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availabelQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () =>{
    if(availabelQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        finalScore.innerText = `Savladali ste  ${(score/MAX_QUESTIONS).toFixed(2)} % gradiva`;
        return window.location.assign('#end');
    }

    questionCounter++;
    progressText.innerText = `Pitanje ${questionCounter} / ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${((questionCounter)/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availabelQuestions.length);
    currentQuestion = availabelQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })

    availabelQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();
        }, 1000)
    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}



startQuiz();