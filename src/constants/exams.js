export const questions = [
	{
		id: 'OP_2024_01_K/1',
		question: `Kompanija VTSSoft odlucila je da nagradi svoje najvrednije radnike povecanjem plate. Za povecanje se razmatra nekoliko kriterijuma, kao sto su pozicija, broj uspesno kompletiranih projekata, ali i broj kasnjenja na posao. Pozicije su oznacene karakterima J (junior developer), M (medior developer), i S (senior developer). Junior developeri imaju pravo na povecanje od 10% ako imaju bar 3 uspesno kompletirana projekta i ne vise od 2 kasnjenja na posao. Medior developeri imaju pravo na povecanje od 15% ako imaju bar 5 uspesno kompletiranih projekata i ne vise od 3 kasnjenja na posao. Za seniore vazi bar 7 projekata i ne vise od 5 kasnjenja, a povecanje iznosi 20%. Potrebno je ucitati trenutnu platu, poziciju, broj projekata i broj kasnjenja, a potom odrediti da li je taj radnik kvalifikovan za povecanje. Povecanu platu ispisati uz adekvatnu poruku. Ukoliko radnik nije kvalifikovan za povecanje, ispisati poruku i o tome. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji resava opisane zahteve. `,
		answerCode: `#include <stdio.h>
void Z1_OP_2024_01_K()
{
    char pozicija;
    int brKompletiranih, brKasnjenja, plata, uvecanaPlata;
    printf("Unesite poziciju, platu, broj kompletiranih projekata i kasnjenja na posao. \\n");
    scanf_s("%c", &pozicija);
    scanf_s("%d%d%d", &plata, &brKompletiranih, &brKasnjenja);
    if (pozicija == 'J')
    {
        if (brKompletiranih > 2 && brKasnjenja < 3)
        {
            uvecanaPlata = plata * 1.1;
            printf("Uvecana plata za juniora je: %d\\n", uvecanaPlata);
        }
        else {
            uvecanaPlata = plata;
            printf("Nemate pravo za uvecanje plate!\\n");
        }
    }
    else if (pozicija == 'M')
    {
        if (brKompletiranih > 4 && brKasnjenja < 4)
        {
            uvecanaPlata = plata * 1.15;
            printf("Uvecana plata za mediora je: %d\\n", uvecanaPlata);
        }
        else {
            uvecanaPlata = plata;
            printf("Nemate pravo za uvecanje plate!\\n");
        }
    }
    else if (pozicija == 'S')
    {
        if (brKompletiranih > 6 && brKasnjenja < 6)
        {
            uvecanaPlata = plata * 1.2;
            printf("Uvecana plata za seniora je: %d\\n", uvecanaPlata);
        }
        else {
            uvecanaPlata = plata;
            printf("Nemate pravo za uvecanje plate!\\n");
        }
    }
    else
        printf("Pogresan unos pozicije!\\n");
}`,
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_01_K/2',
		question: `Stovariste prehrambenih proizvoda VTSOrgranik sadrzi N razlicitih proizvoda za koje se belezi celobrojna kolicina i decimalna cena. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji ce sa tastature ucitavati kolicine i cene za svih N proizvoda, a zatim odrediti ukupnu kolicinu kao i prosecnu cenu svih proizvoda u stovaristu zaokruzenu na dve decimale. Korisnik na pocetku programa zadaje vrednost N, a na kraju programa prikazuju se dobijene vrednosti pracene adekvatnim porukama. `,
		answerCode:
			'\n' +
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'typedef struct {\n' +
			'    int amount;\n' +
			'    float price;\n' +
			'} Product;\n' +
			'\n' +
			'void Z2_OP_2024_01_K() {\n' +
			'    int N;\n' +
			'    printf("Unesite kolicinu razlicitih proizvoda :");\n' +
			'    scanf(" %d", &N);\n' +
			'    Product *products = malloc(N*sizeof(Product));\n' +
			'    int totalProducts = 0;\n' +
			'    float totalPrice = 0;\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'        printf("\\nUnesite cenu proizvoda: ");\n' +
			'        scanf(" %f", &products[i].price);\n' +
			'        printf("\\nUnesite kolicinu proizvoda: ");\n' +
			'        scanf(" %f", &products[i].amount);\n' +
			'        totalProducts = totalProducts + products[i].amount;\n' +
			'        float totalPrice = totalPrice + products[i].price;\n' +
			'    }\n' +
			'\n' +
			'    float avgPrice = totalPrice / totalProducts;\n' +
			'\n' +
			'    printf("\\n Ukupna kolicina proizvoda je %d, a prosecna cena je %.2f", totalProducts, avgPrice);\n' +
			'\n' +
			'\n' +
			'}\n' +
			'\n',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_01_K/3',
		question: `Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji za zadatu celobrojnu vrednost za koju nije poznato koliko ima cifara odredjuje sumu cifara, najvecu cifru i decimalnu prosecnu vrednost cifara. Korisnik na pocetku programa zadaje celobrojnu vrednost. Na kraju programa potrebno je prikazati sumu cifara, najvecu cifru i decimalnu prosecnu vrednost zaokruzenu na jednu decimalu, pri cemu sve vrednosti treba prikazati u posebnom redu.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'#include <string.h>\n' +
			'\n' +
			'\n' +
			'\n' +
			'\n' +
			'void Z3_OP_2024_01_K(){\n' +
			'    int N;\n' +
			'    printf("Unesite celobrojnu vrednost :");\n' +
			'    scanf(" %d", &N);\n' +
			'    int digitCoutner = 0;\n' +
			'    int max = 0;\n' +
			'    float digitSum =0;\n' +
			'\n' +
			'    while(N>0){\n' +
			'        if(N%10>max){\n' +
			'            max = N%10;\n' +
			'        }\n' +
			'        digitSum = digitSum + N%10;\n' +
			'        digitCoutner++;\n' +
			'        N = N/10;\n' +
			'    }\n' +
			'\n' +
			'    float avgDigit = digitSum/digitCoutner;\n' +
			'\n' +
			'    printf("\\nSuma cifara je %.1f, prosecna cifra je %.1f, a najveca cifra je %d", digitSum, avgDigit, max);\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_02_K/1',
		question: `Softverska kompanija izradjuje sistem za pracenje broja radova na konferencijama. Za svakog ucesnika pamti se koliko objavljenih radova ima do sada. Obzirom na sigurnost podataka koju kompanija treba da ostvari, svi podaci su sifrovani. Da bi se podaci desifrovali, potrebno je da se za podatak odredi kub najvece cifre. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturnu funkciju i program koji opisuje zadati problem. Funkcija treba da na osnovu zadate vrednosti izvrsi desifrovanje. Na kraju programa prikazati brojeve radova za svakog korisnika. Koristiti iskljucivo dinamicke nizove!`,
		answerCode: `#include <stdio.h>
#include <stdlib.h>

int decrypt(int a){
    if(a<0){
        a=-a;
    }

    if(a == 0){
        return 0;
    }

    int max = 0;
    while(a>0){
        int d = a%10;
        if(d > max){
            max = d;
        }
        a = a/10;

    }
    return max*max*max;
}


void Z1_OP_2024_02_K(){
    int N;
    printf("Unesite broj takmicara: ");
    scanf(" &d", &N);
    int *beforeDecrypt= malloc(N*sizeof(int));
    int *decrypted = malloc(N*sizeof(int));

    if( decrypted == NULL || beforeDecrypt == NULL){
        printf("\\n Gresla pri alokaciji memorije");
        return;
    }

    printf("\\nUnesite sifrovane vrednosti:");
    for(int i = 0; i<N; i++){

        scanf(" %d", &beforeDecrypt[i]);
        decrypted[i]= decrypt(beforeDecrypt[i]);
    }

    printf("\\nbroj radova po ucesnicima je \\n");
    for(int i = 0; i<N; i++){
        printf("%d . %d\\n",i+1,decrypted[i]);
    }
    free(beforeDecrypt);
    free(decrypted);
}
`,
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_02_K/2',
		question: `U matrici dimenzija NxN nalazi se N mesecnih telefonskih racuna za N korisnika. U sklopu promocije, umanjiti elemente iznad sporedne dijagonale za 10% a ispod glavne dijagonale umanjiti za 11.5%. Nakon primene promocije, pronaci indeks korisnika koji je napravio najveci ukupni racun (suma elemenata vrste matrice) i prikazati koliko iznosi taj racun. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje zadate zahteve.`,
		answerCode:
			'int main(){\n' +
			'    int A[50][50];\n' +
			'    int N;\n' +
			'    printf("Unesite broj : ");\n' +
			'    scanf("%d",&N);\n' +
			'\n' +
			'    for(int i = 50; i<N; i++){\n' +
			'        for(int j=50;j<N;j++){\n' +
			'            scanf("%d",&A[i][j]);\n' +
			'            if(i+j<50){\n' +
			'                A[i][j]*=0.90;\n' +
			'            }\n' +
			'            if(i>j){\n' +
			'                A[i][j]*=0.85;\n' +
			'            }\n' +
			'\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'    int max = 0;\n' +
			'    int maxI = 0;\n' +
			'\n' +
			'    for(int i = 0; i<50; i++){\n' +
			'        int sum = 0;\n' +
			'        for(int j = 0; j<50;j++){\n' +
			'            sum = sum+A[i][j];\n' +
			'        }\n' +
			'        if (sum>max){\n' +
			'            maxI = i;\n' +
			'            max = sum;\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'    printf("Index : %d \\n Kolicina : %.2f", maxI, max);\n' +
			'\n' +
			'    return 0;\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_02_K/3',
		question: `Potrebno je kreirati softver za pracenje podataka o dva startup projekta. Za svaki startup projekat pamte se informacije o nazivu projekta, godini realizacije, broju clanova tima i vrednosti projekta u evrima. U glavnom programu kreirati dva projekta, jednom dodeliti podatke u vidu konstanti, drugom zadati podatke od strane korisnika (sa standardnog ulaza). Na kraju programa prikazati sve informacije o projektu koji ima vecu vrednost. Prikaz podataka o startup projektu realizovati pomocu pomocne funkcije. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturnu funkciju i program koji realizuje zadate zahteve.`,
		answerCode:
			'#include <stdio.h>\n' +
			'\n' +
			'typedef struct {\n' +
			'    char naziv[50];\n' +
			'    int godina;\n' +
			'    int brojClanova;\n' +
			'    double vrednost;\n' +
			'} Startup;\n' +
			'\n' +
			'void prikazi(Startup s) {\n' +
			'    printf("Naziv: %s\\n", s.naziv);\n' +
			'    printf("Godina: %d\\n", s.godina);\n' +
			'    printf("Broj clanova: %d\\n", s.brojClanova);\n' +
			'    printf("Vrednost: %.2lf EUR\\n", s.vrednost);\n' +
			'}\n' +
			'\n' +
			'int Z3_OP_2024_02_K() {\n' +
			'    Startup s1 = {"ProjekatA", 2023, 5, 100000.0};\n' +
			'    Startup s2;\n' +
			'\n' +
			'    printf("Unesite naziv: ");\n' +
			'    scanf("%s", s2.naziv);\n' +
			'    printf("Unesite godinu: ");\n' +
			'    scanf("%d", &s2.godina);\n' +
			'    printf("Unesite broj clanova: ");\n' +
			'    scanf("%d", &s2.brojClanova);\n' +
			'    printf("Unesite vrednost: ");\n' +
			'    scanf("%lf", &s2.vrednost);\n' +
			'\n' +
			'    if (s1.vrednost > s2.vrednost)\n' +
			'        prikazi(s1);\n' +
			'    else\n' +
			'        prikazi(s2);\n' +
			'\n' +
			'    return 0;\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_06_ispit/1',
		question: `Korisnik unosi brojeve u intervalu od 1 do 15 sve dok ne unese -1. Ako korisnik unese broj koji nije u datom intervalu, program treba da ispise poruku o gresci. Za svaki validan uneseni broj, program racuna njegov faktorijel i ispisuje ga na ekranu. Na kraju, program treba da ispise ukupan broj unetih validnih brojeva. Potrebno je nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji resava opisane zahteve. `,
		answerCode:
			'#include <stdio.h>\n' +
			'void Z1_OP_2024_06_ispit(){\n' +
			'    int N;\n' +
			'    int counter=0;\n' +
			'    printf("Unesite broj (1-15)\\n");\n' +
			'    scanf("%d", &N);\n' +
			'    while(N!=-1){\n' +
			'\n' +
			'        if(N>0&&N<16){\n' +
			'            int f = 1;\n' +
			'            int temp = N;\n' +
			'            counter++;\n' +
			'            while(temp>0){\n' +
			'                f = temp*f;\n' +
			'                temp--;\n' +
			'\n' +
			'            }\n' +
			'            printf("Faktorijel broja %d je %d\\n", N, f);\n' +
			'\n' +
			'        }else if(N!=-1){\n' +
			'            printf("Greska! Morate uneti broj od 1 do 15\\n");\n' +
			'        }\n' +
			'\n' +
			'        printf("Da li zelite da unesete drugi broj? (unesite -1 za izlaz)\\n");\n' +
			'        scanf("%d", &N);\n' +
			'\n' +
			'    }\n' +
			'    printf("Ukupan broj validnih unosa je : %d", counter);\n' +
			'}\n',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_06_ispit/2',
		question: `U matrici dimenzija NxN nalazi se N mesecnih zarada za N zaposlenih. Zbog novogodisnjih praznika plata u poslednjoj koloni je uvecana za 20%. Nakon uvecanja potrebno je pronaci indeks korisnika koji je primio najvecu platu u toku svih N meseci i sracunati njegovu prosecnu platu. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje zadate zahteve.`,
		answerCode:
			'#include <stdio.h>\n' +
			'void Z2_OP_2024_06_ispit(){\n' +
			'    int N;\n' +
			'    printf("Unesite velicinu NxN matrice\\n");\n' +
			'    scanf("%d",&N);\n' +
			'    float P[N][N];\n' +
			'    float max = 0;\n' +
			'    int maxIndex = 0;\n' +
			'    for(int i = 0; i<N;i++){\n' +
			'        float sum = 0;\n' +
			'        for(int j = 0; j<N; j++){\n' +
			'            printf("Unesite platu %d. korisnika za %d. mesec",i+1,j+1);\n' +
			'            scanf("%f",&P[i][j]);\n' +
			'            if(j == N - 1){\n' +
			'                P[i][j] =  P[i][j] * 1.2;\n' +
			'            }\n' +
			'            sum = sum + P[i][j];\n' +
			'        }\n' +
			'        if(sum>max){\n' +
			'            max = sum;\n' +
			'            maxIndex = i;\n' +
			'        }\n' +
			'    }\n' +
			'    float avgMax = max/N;\n' +
			'\n' +
			'    printf("Najvecu platu je primio korisnik koji ima index %d, a srednja vrednost je %.2f", maxIndex,avgMax);\n' +
			'}\n' +
			'\n',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_06_ispit/3',
		question: `Za potrebe restorana brze hrane, potrebno je kreirati softver za vodjenje evidencije o dostupnim obrocima. Za svaki obrok pamte se informacije kao sto su naziv obroka, duzina pripreme u minutima, gramaza, cena, kao i podatak da li je veganski ili nije. U glavnom programu kreirati dinamicki niz od 10 obroka, ucitati ih sa standardnog ulaza, a zatim naci najskuplji veganski obrok. Na kraju programa prikazati sve obroke kao i najskuplji veganski obrok. Prikaz informacija o obrocima implementirati koriscenjem pomocne funkcije. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje zadate zahteve.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'\n' +
			'typedef struct {\n' +
			'    char name[50];\n' +
			'    int timeToMake;\n' +
			'    float price;\n' +
			'    float amountInGrams;\n' +
			'    int isVegan; //1-yes 0-no\n' +
			'\n' +
			'} Meal;\n' +
			'\n' +
			'void printMealVegMax( Meal m, int isMax){\n' +
			'    if(isMax == 1){\n' +
			'        printf("NAJSKUPLJI VEGANSKI OBROK :\\n");\n' +
			'    }\n' +
			'    printf("Ime obroka: %s \\n", m.name);\n' +
			'    printf("Cena obroka: %.2f \\n", m.price);\n' +
			'    printf("Gramaza: %.2f \\n", m.amountInGrams);\n' +
			'    printf("Vreme potrebno za pripremu: %d \\n", m.timeToMake);\n' +
			'    printf("Veganski: ");\n' +
			'    if(m.isVegan == 1){\n' +
			'        printf("Da \\n");\n' +
			'    }else if(m.isVegan==0){\n' +
			'        printf("Ne \\n");\n' +
			'    }else{\n' +
			'        printf("nepoznato \\n");\n' +
			'    }\n' +
			'\n' +
			'}\n' +
			'\n' +
			'void Z3_OP_2024_06_ispit(){\n' +
			'\n' +
			'    int N = 10;\n' +
			'    float vegMax = 0;\n' +
			'    int maxIndex = 0;\n' +
			'    Meal *meals = malloc(N*sizeof(Meal));\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'        printf("\\nUnesite ime (jedna rec): ");\n' +
			'        scanf("%s", &meals[i].name);\n' +
			'        printf("\\nUnesite cenu:");\n' +
			'        scanf("%f", &meals[i].price);\n' +
			'        printf("\\nUnesite gramazu:");\n' +
			'        scanf("%f", &meals[i].amountInGrams);\n' +
			'        printf("\\nUnesite vreme potrebno za pripremu u minutima:");\n' +
			'        scanf("%d", &meals[i].timeToMake);\n' +
			'        printf("\\nDa li je veganski? (1-da 0-ne):");\n' +
			'        scanf("%d", &meals[i].isVegan);\n' +
			'\n' +
			'        if(meals[i].isVegan==1&&meals[i].price>vegMax){\n' +
			'            maxIndex=i;\n' +
			'\n' +
			'        }\n' +
			'\n' +
			'    }\n' +
			'\n' +
			'    printf("\\n=================\\n");\n' +
			'    printf("SVI OBROCI\\n");\n' +
			'\n' +
			'\n' +
			'\n' +
			'    for(int i = 0; i<N; i++ ){\n' +
			'        if(i == maxIndex){printMealVegMax(meals[i],1);\n' +
			'        }else{\n' +
			'            printMealVegMax(meals[i],0);}\n' +
			'\n' +
			'    }\n' +
			'    \n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_07_ispit/1',
		question: `Poslata je poruka koja se sastoji od celobrojne vrednosti za koju nije poznat broj cifara. Odrediti i prikazati koliko puta se u poruci cifra 1 i cifra 0 ponavljaju, a koliko puta se javljaju ostale cifre zajedno. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji pronalazi i prikazuje potrebne informacije. Korisnik na pocetku algoritma zadaje broj. `,
		answerCode:
			'#include <stdio.h>\n' +
			'void Z1_OP_2024_07_ispit(){\n' +
			'    int N = 10;\n' +
			'    printf("unesite velicinu broja : \\n");\n' +
			'    scanf(" %d", &N);\n' +
			'    char poruka[N];\n' +
			'    int nule = 0;\n' +
			'    int jedinice = 0;\n' +
			'\n' +
			'\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'        printf("unesite ");\n' +
			'        printf("%d", i+1);\n' +
			'        printf(".");\n' +
			'        printf(" cifru : \\n");\n' +
			'        scanf(" %c", &poruka[i]);\n' +
			"        if (poruka[i]=='0'){\n" +
			'            nule++;\n' +
			"        }else if(poruka[i]=='1'){\n" +
			'            jedinice++;\n' +
			'        };\n' +
			'    };\n' +
			'    int ostaliZnaci = (N+1) - (nule+jedinice);\n' +
			'\n' +
			'    printf("\\njedinice (1) :");\n' +
			'    printf(" %d", jedinice);\n' +
			'    printf("\\nnule (0) :");\n' +
			'    printf(" %d", nule);\n' +
			'    printf("\\nostali znaci (?) :");\n' +
			'    printf(" %d", ostaliZnaci);\n' +
			'    printf("\\n");\n' +
			'}\n',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_07_ispit/2',
		question: `U basti su zasadjene razlicite biljke (brojevi od 1 do 9). Krtica Biljana povremeno svraca u bastu i sladi se svezim biljkama. Pozicije gde je Biljana pojela celu biljku obelezene su u matrici cifrom 0. Prebrojati koliko je biljaka pojela Biljana u delu baste iznad glavne dijagonale matrice, a koliko je biljaka ostalo nepojedeno na sporednoj dijagonali matrice. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji odredjuje i prikazuje potrebne informacije. Korisnik na pocetku programa zadaje dimenzije i elemente matrice.`,
		answerCode:
			'#include <stdio.h>\n' +
			'void Z2_OP_2024_07_ispit(){\n' +
			'\n' +
			'    int N;\n' +
			'    printf(" \\n Unesite velicinu NxN matrice. \\n N: ");\n' +
			'    scanf(" %d", &N);\n' +
			'    int garden[N][N];\n' +
			'    int pojedeneBiljkeIznadGlavneMatrice = 0;\n' +
			'    int nepojedeneBiljeNaSporednojMatrici = 0;\n' +
			'\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'        for(int j = 0; j<N; j++){\n' +
			'            printf(" \\n (1-9)- biljka . \\n 0 - pojedena biljka \\n  ");\n' +
			'            scanf(" %d",&garden[i][j]);\n' +
			'\n' +
			'            if((i<j)&&garden[i][j]==0){\n' +
			'                pojedeneBiljkeIznadGlavneMatrice++;\n' +
			'            }\n' +
			'\n' +
			'            if(j+i==N-1&&garden[i][j]!=0){\n' +
			'                nepojedeneBiljeNaSporednojMatrici++;\n' +
			'            }\n' +
			'\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'    printf(" \\n Broj biljaka koje je Biljana pojela je %d \\n", pojedeneBiljkeIznadGlavneMatrice);\n' +
			'\n' +
			'    printf(" \\n Broj nepojedenih biljaka na sporednoj dijagonali je %d \\n", nepojedeneBiljeNaSporednojMatrici);\n' +
			'\n' +
			'\n' +
			'\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_07_ispit/3',
		question: `Za potrebe restorana brze hrane, potrebno je kreirati softver za vodjenje evidencije o prodatim obrocima. Za svaki obrok pamte se informacije kao sto su naziv obroka, gramaza, cena, kao i podatak da li je veganski ili nije. U glavnom programu kreirati dinamicki niz od 10 obroka, ucitati ih sa standardnog ulaza, a zatim naci koliko je restoran prihodovao na prodaji veganskih obroka, kao i koliko je ukupno prodao obroka koji nisu veganski. Na kraju programa prikazati sve obroke kao i trazene informacije. Prikaz informacija o obrocima implementirati koriscenjem pomocne funkcije. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje zadate zahteve.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'\n' +
			'\n' +
			'\n' +
			'typedef struct {\n' +
			'    char name[50];\n' +
			'    float price;\n' +
			'    float amountInGrams;\n' +
			'    int isVegan; //1-yes 0-no\n' +
			'\n' +
			'} Meal;\n' +
			'\n' +
			'void printMeal( Meal m);\n' +
			'\n' +
			'void Z3_OP_2024_07_ispit(){\n' +
			'\n' +
			'    int N = 10;\n' +
			'    int nonVeganMealsCounter;\n' +
			'    float veganEarnings;\n' +
			'    Meal *meals = malloc(N*sizeof(Meal));\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'        printf("\\nUnesite ime:");\n' +
			'        scanf(" %s", &meals[i].name);\n' +
			'        printf("\\nUnesite cenu:");\n' +
			'        scanf(" %f", &meals[i].price);\n' +
			'        printf("\\nUnesite gramazu:");\n' +
			'        scanf(" %f", &meals[i].amountInGrams);\n' +
			'        printf("\\nDa li je veganski? (1-da 0-ne):");\n' +
			'        scanf(" %d", &meals[i].isVegan);\n' +
			'\n' +
			'        if(meals[i].isVegan==1){\n' +
			'            veganEarnings += meals[i].price;\n' +
			'\n' +
			'        }else if(meals[i].isVegan==0){\n' +
			'            nonVeganMealsCounter++;\n' +
			'        }\n' +
			'\n' +
			'    }\n' +
			'\n' +
			'    printf("\\n=================\\n");\n' +
			'    printf("SVI OBROCI\\n");\n' +
			'\n' +
			'\n' +
			'\n' +
			'    for(int i = 0; i<N; i++ ){\n' +
			'        printMeal(meals[i]);\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'    printf("Kolicina neveganskih obroka je : %d \\n", nonVeganMealsCounter);\n' +
			'    printf("Ukupan prihod veganskih obroka je : %.2f \\n", veganEarnings);\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_09_ispit/1',
		question: `Poslata je poruka koja se sastoji od celobrojne vrednosti za koju nije poznat broj cifara (sastoji se samo od cifara 2, 3 ili 4). Odrediti i prikazati koliko puta se u poruci svaka cifra ponavlja i od koliko cifara se sastoji broj. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji pronalazi i prikazuje potrebne informacije. Korisnik na pocetku algoritma zadaje broj.`,
		answerCode:
			'#include <stdio.h>\n' +
			'void Z1_OP_2024_09_ispit(){\n' +
			'    int N;\n' +
			'    scanf("%d", &N);\n' +
			'   int allDigits = 0;\n' +
			'   int twos = 0;\n' +
			'   int threes = 0;\n' +
			'   int fours = 0;\n' +
			'\n' +
			'    while(N>0){\n' +
			'        int digit = N%10;\n' +
			'\n' +
			'        if(digit==2){\n' +
			'            twos++;\n' +
			'        }\n' +
			'\n' +
			'        if(digit == 3){\n' +
			'            threes++;\n' +
			'        }\n' +
			'\n' +
			'        if(digit == 4){\n' +
			'            fours++;\n' +
			'        }\n' +
			'\n' +
			'        allDigits++;\n' +
			'\n' +
			'    }\n' +
			'\n' +
			'    printf("\\n Number of fours: %d \\n Number of threes: %d \\n Number of twos: %d \\n Total digits: %d", fours, threes,twos,allDigits);\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_09_ispit/2',
		question: `Mlodji gorani su resili da urade posumljavanje terena. Za to je neophodno da iskopaju rupu dubine 90 centimetara. U matrici je brojevima prikazana trenutna dubina iskopanih rupa (brojevi od 0 do 90). Pozicije gde su mladi gorani pripremili rupu za sadnju su obelezene brojem 90, a tamo gde nisu ni poceli kopanje brojem 0. Prebrojati koliko je rupa potpuno iskopano kao i koliko je rupa iskopano vise od polovine na levoj polovini terena (ukoliko je dimenzija terena neparan broj, polovina se racuna bez srednje kolone). Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji odredjuje i prikazuje potrebne informacije. Korisnik na pocetku programa zadaje dimenzije i elemente matrice.`,
		answerCode:
			'#include <stdio.h>\n' +
			'void Z2_OP_2024_09_ispit(){\n' +
			'    int N;\n' +
			'    printf("Unesite velicinu NxN terena :");\n' +
			'    scanf("%d",&N);\n' +
			'    int iskopaneRupe = 0;\n' +
			'    int viseOdPolaIskopaneRupe = 0;\n' +
			'    int nezapoceteRupe = 0;\n' +
			'    int T[N][N];\n' +
			'\n' +
			'    for(int i = 0;i<N;i++){\n' +
			'        for(int j = 0; i<N; i++){\n' +
			'            scanf("&d",&T[i][j]);\n' +
			'            if(j<=N/2&&T[i][j]>45){\n' +
			'                viseOdPolaIskopaneRupe++;\n' +
			'            }\n' +
			'\n' +
			'            if(T[i][j]==90){\n' +
			'                iskopaneRupe++;\n' +
			'            }\n' +
			'\n' +
			'            if(T[i][j] == 0){\n' +
			'                nezapoceteRupe++;\n' +
			'            }\n' +
			'\n' +
			'\n' +
			'        }\n' +
			'\n' +
			'    }\n' +
			'\n' +
			'    printf("Ukupan broj potpuno iskopanih rupa je %d. \\n Broj vise od 50%% iskopanih rupa na levoj polovini terena je %d.\\n Broj nezapocetih rupa je %d.",iskopaneRupe,viseOdPolaIskopaneRupe,nezapoceteRupe);\n' +
			'\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2024_09_ispit/3',
		question: `Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji koristi niz struktura za cuvanje podataka o N porudzbinama. Svaka porudzbina ima sledece podatke: Uzrast kupca (celobrojna vrednost), broj proizvoda koje je kupio (celobrojna vrednost) cena proizvoda po komadu (realna vrednost), nacin placanja: 'K' ako placa karticom, 'P' ako placa kuriru pri preuzimanju. Na osnovu unetih podataka, odredjuje se popust: Ako je uzrast kupca manji od 18 godina, odobrava se popust od 10%. Ako je uzrast kupca veci od 65 godina, odobrava se popust od 15%. Ako kupac placa karticom ('K'), dobija se dodatni popust od 5%. Koristiti funkcije za resavanje ovog zadatka. Ucitati N porudzbina, a zatim izracunati i ispisati konacnu cenu svake (na dve decimale), uz primenu popusta.`,
		answerCode:
			'include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'\n' +
			'\n' +
			'\n' +
			'typedef struct {\n' +
			'    int ageOfBuyer;\n' +
			'    float priceAfterDiscount;\n' +
			'    float priceOfProduct;\n' +
			'    int amountOfProduct;\n' +
			'    char paymentMethod; //K-online card payment P-payment on delivery\n' +
			'\n' +
			'} Buyer;\n' +
			'\n' +
			'void calculatePrice( Buyer b){\n' +
			'\n' +
			'    int discount = 0;\n' +
			'\n' +
			'    if(b.ageOfBuyer>65){\n' +
			'        discount += 15;\n' +
			'    }\n' +
			'\n' +
			'    if (b.ageOfBuyer<18){\n' +
			'        discount += 10;\n' +
			'    }\n' +
			'\n' +
			"    if(b.paymentMethod == 'K'){\n" +
			'        discount += 5;\n' +
			'    }\n' +
			'\n' +
			'    b.priceAfterDiscount = (b.priceOfProduct*b.amountOfProduct) * (100.0 - discount)/100;\n' +
			'\n' +
			'\n' +
			'}\n' +
			'\n' +
			'void Z3_OP_2024_09_ispit(){\n' +
			'\n' +
			'    int N = 2;\n' +
			'\n' +
			'    Buyer *buyers = malloc(N*sizeof(Buyer));\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'        printf("\\nUnesite uzrast kupca:");\n' +
			'        scanf(" %d", &buyers[i].ageOfBuyer);\n' +
			'        printf("\\nUnesite cenu proizvoda:");\n' +
			'        scanf(" %f", &buyers[i].priceOfProduct);\n' +
			'        printf("\\nUnesite kolicinu proizvoda:");\n' +
			'        scanf(" %d", &buyers[i].amountOfProduct);\n' +
			'        printf("\\nUsesite nacin placanja (K-online card payment P-payment on delivery):");\n' +
			'        scanf(" %c", &buyers[i].paymentMethod);\n' +
			'        calculatePrice(buyers[i]);\n' +
			'    }\n' +
			'\n' +
			'    printf("\\n=================\\n");\n' +
			'\n' +
			'\n' +
			'\n' +
			'\n' +
			'    for(int i = 0; i<N; i++ ){\n' +
			'\n' +
			'        printf("Korisnik %d je platio %.2f",i+1, buyers[i].priceAfterDiscount);\n' +
			'    }',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2025_07_ispit/1',
		question: `Korisnik unosi prirodne brojeve sve dok ne unese nulu. Ako je broj paran, potrebno je pomocu funkcije proveriti da li je savrsen broj (broj je jednak zbiru svojih pozitivnih delilaca manjih od njega, npr. 6 = 1 + 2 + 3). Ako jeste, broj se dodaje na sumu savrsenih brojeva. Ako broj nije paran ili nije savrsen, ignorise se (ali se ne prijavljuje greska). Nakon unosa nule, program prikazuje sumu svih unetih savrsenih parnih brojeva. Potrebno je nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji resava opisane zahteve. Napomena: Odredjivanje da li je broj savrsen potrebno je realizovati iskljucivo pomocu funkcije.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdbool.h>\n' +
			'\n' +
			'bool isNumberPerfect(int n){\n' +
			'    if(n%2==0){\n' +
			'        int sum2 = 0;\n' +
			'        for(int i = 1; i<=n/2; i++){\n' +
			'            if (n%i==0){\n' +
			'                sum2 += i;\n' +
			'            }\n' +
			'        }\n' +
			'        if(sum2==n){\n' +
			'            return true;\n' +
			'        }else{\n' +
			'            return false;\n' +
			'        }\n' +
			'    }else{\n' +
			'        return false;\n' +
			'    }\n' +
			'}\n' +
			'\n' +
			'void Z1_OP_2025_07_ispit(){\n' +
			'    int N = -67676767;\n' +
			'    int sum = 0;\n' +
			'    while(N!=0){\n' +
			'\n' +
			'        printf("Unesite broj :");\n' +
			'        scanf("%d",&N);\n' +
			'        bool isPerfect = isNumberPerfect(N);\n' +
			'        if(isPerfect){\n' +
			'            sum +=N;\n' +
			'        }\n' +
			'\n' +
			'    }\n' +
			'\n' +
			'    printf("\\nSuma savrsenih parnih brojeva je: %d", sum);\n' +
			'\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2025_07_ispit/2',
		question: `U okviru studentskog takmicenja iz informatike, odrzan je niz izazova u vidu logickih kvizova. Studenti su bili podeljeni u timove, a svaki tim je imao vise rundi u kojima su mogli da osvoje poene. Matrica dimenzija NxM predstavlja broj poena koje je svaki tim (red) osvojio u svakoj rundi (kolona). Organizator takmicenja zeli da napravi poseban izvestaj u kome se za svaki tim izdvaja njegov najslabiji rezultat (tj. najmanji broj poena u bilo kojoj rundi). Ovi rezultati se smestaju u dinamicki niz dimenzije N, tako da svaki element tog niza predstavlja najmanji broj poena odgovarajuceg tima. Nakon popunjavanja matrice, potrebno je prikazati sve unete poene, a zatim i sve elemente niza. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje zadate zahteve.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'void Z2_OP_2025_07_ispit(){\n' +
			'     int M;\n' +
			'     int N;\n' +
			'\n' +
			'    printf("\\nUnesite broj timova: ");\n' +
			'    scanf("%d",&N);\n' +
			'    printf("\\nUnesite broj rundi: ");\n' +
			'    scanf("%d",&M);\n' +
			'\n' +
			'    int T[N][M];\n' +
			'\n' +
			'    int *MIN = malloc(N * sizeof(int));\n' +
			'\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'        for(int j = 0; j<M; j++){\n' +
			'            scanf("%d",&T[i][j]);\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'        for(int j = 0; j<M; j++){\n' +
			'            printf("%d ", T[i][j]);\n' +
			'        }\n' +
			'        printf("\\n");\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'        int min = T[i][0];\n' +
			'        for(int j = 0; j<M; j++){\n' +
			'            if(T[i][j]<min){\n' +
			'                min = T[i][j];\n' +
			'            }\n' +
			'        }\n' +
			'        MIN[i]= min;\n' +
			'    }\n' +
			'\n' +
			'    printf("\\nNajslabiji rezultat svakog tima:\\n");\n' +
			'\n' +
			'    for(int i = 0; i < N; i++){\n' +
			'        printf("%d ", MIN[i]);\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'\n' +
			'\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2025_07_ispit/3',
		question: `Za potrebe skolskog sportskog kluba potrebno je napraviti program za evidenciju ucenika koji ucestvuju u sportskim aktivnostima. Za svakog ucenika cuvaju se sledeci podaci: ime i prezime, uzrast, sport kojim se bavi, broj osvojenih medalja i podatak da li je aktivno ukljucen u treninge (1 - da, 0 - ne). U glavnom programu kreirati staticki niz od 10 ucenika, ucitati podatke sa standardnog ulaza, a zatim pronaci i prikazati ucenika koji ima najvise osvojenih medalja medju onima koji su aktivno ukljuceni u treninge. Na kraju, program treba da prikaze sve unete ucenike, kao i ucenika sa najvise medalja koji aktivno trenira. Prikaz informacija o ucenicima implementirati koriscenjem pomocne funkcije. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje zadate zahteve.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'#include <string.h>\n' +
			'\n' +
			'typedef struct {\n' +
			'    char name[50];\n' +
			'    int age;\n' +
			'    char sportOfChoice[50];\n' +
			'    int isActivelyTraining; //1-da 0-ne\n' +
			'    int numberOfMedals;\n' +
			'} Student;\n' +
			'\n' +
			'void printStudent(Student s, int isTheBest){\n' +
			'\n' +
			'    if(isTheBest)\n' +
			'        printf("\\nNAJBOLJI UCENIK:\\n");\n' +
			'    else\n' +
			'        printf("\\nUCENIK:\\n");\n' +
			'\n' +
			'    printf("Ime i prezime: %s\\n", s.name);\n' +
			'    printf("Godine: %d\\n", s.age);\n' +
			'    printf("Sport: %s\\n", s.sportOfChoice);\n' +
			'\n' +
			'    printf("Aktivno trenira: ");\n' +
			'    s.isActivelyTraining ? printf("DA\\n") : printf("NE\\n");\n' +
			'\n' +
			'    printf("Broj medalja: %d\\n", s.numberOfMedals);\n' +
			'}\n' +
			'\n' +
			'void Z3_OP_2025_07_ispit(){\n' +
			'\n' +
			'    Student *students = malloc(10*sizeof(Student));\n' +
			'    int bestIndex = -1;\n' +
			'\n' +
			'    for(int i = 0; i < 10; i++){\n' +
			'\n' +
			'        printf("\\n--- Ucenik %d ---\\n", i+1);\n' +
			'\n' +
			'        printf("Unesite ime i prezime: ");\n' +
			'        scanf(" %[^\\n]", students[i].name);\n' +
			'\n' +
			'        printf("Unesite uzrast: ");\n' +
			'        scanf("%d", &students[i].age);\n' +
			'\n' +
			'        printf("Unesite sport: ");\n' +
			'        scanf(" %[^\\n]", students[i].sportOfChoice);\n' +
			'\n' +
			'        printf("Da li aktivno trenira (1-da 0-ne): ");\n' +
			'        scanf("%d", &students[i].isActivelyTraining);\n' +
			'\n' +
			'        printf("Unesite broj medalja: ");\n' +
			'        scanf("%d", &students[i].numberOfMedals);\n' +
			'\n' +
			'        if(students[i].isActivelyTraining == 1){\n' +
			'            if(bestIndex == -1 ||\n' +
			'               students[i].numberOfMedals > students[bestIndex].numberOfMedals){\n' +
			'                bestIndex = i;\n' +
			'            }\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'    printf("\\n\\n--- SVI UCENICI ---\\n");\n' +
			'\n' +
			'    for(int i = 0; i < 10; i++){\n' +
			'        printStudent(students[i],0);\n' +
			'    }\n' +
			'\n' +
			'    if(bestIndex != -1){\n' +
			'        printStudent(students[bestIndex],1);\n' +
			'    }\n' +
			'    else{\n' +
			'        printf("\\nNijedan ucenik ne trenira aktivno.\\n");\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2025_08_ispit/1',
		question: `Korisnik unosi prirodne brojeve sve dok ne unese nulu. Za svaki uneti broj potrebno je izracunati zbir njegovih cifara. Ako je zbir cifara deljiv sa 7, broj se dodaje na sumu takvih brojeva. Ako zbir nije deljiv sa 7, broj se ignorise. Nakon unosa nule, program prikazuje sumu svih unetih brojeva ciji je zbir cifara deljiv sa 7. Potrebno je nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji resava opisane zahteve. Napomena: Sabiranje cifara unetih brojeva potrebno je realizovati iskljucivo pomocu funkcije.`,
		answerCode:
			'#include <stdio.h>\n' +
			'void Z1_OP_2025_08_ispit(){\n' +
			'    int N = 87;\n' +
			'    int sum = 0;\n' +
			'\n' +
			'    while(N!=0){\n' +
			'        printf("\\nUnesite prirodan broj :");\n' +
			'        scanf("%d",&N);\n' +
			'        int temp = N;\n' +
			'        int digitSum = 0;\n' +
			'        while(temp > 0){\n' +
			'            digitSum = digitSum + temp%10;\n' +
			'            temp = temp /10;\n' +
			'\n' +
			'        }\n' +
			'\n' +
			'        if(digitSum%7==0){\n' +
			'            sum = sum +N;\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'    printf("Suma svih brojeva ciji je zbir cifara deljiv sa 7 je : %d", sum);\n' +
			'}',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2025_08_ispit/2',
		question: `U okviru studentskog istrazivackog projekta, grupa studenata pratila je broj sati koje su radnici u kompaniji proveli na radu svakog dana tokom nedelje. Matrica dimenzije NxM predstavlja broj sati koje je svaki radnik (red) proveo na radu u svakoj od M dana (kolone). Organizator projekta zeli da napravi poseban izvestaj u kome se za svaki dan izracunava prosecan broj sati koje su radnici radili. Ovi proseci se smestaju u dinamicki niz dimenzije M, tako da svaki element tog niza predstavlja prosek za odgovarajuci dan. Nakon popunjavanja matrice, potrebno je prikazati sve unete brojeve sati u matrici, a zatim i sve elemente niza sa prosecima po danima. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje zadate zahteve.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'void Z2_OP_2025_08_ispit(){\n' +
			'    int N;\n' +
			'    int M;\n' +
			'\n' +
			'    printf("Unesite broj radnika : ");\n' +
			'    scanf("%d", &N);\n' +
			'    printf("Unesite broj dana : ");\n' +
			'    scanf("%d", &M);\n' +
			'\n' +
			'    int T[N][M];\n' +
			'\n' +
			'    float *AVG = malloc(M*sizeof(float));\n' +
			'\n' +
			'\n' +
			'    for(int i = 0; i<N; i++){\n' +
			'\n' +
			'        for(int j = 0; j<M; j++){\n' +
			'            scanf("%d", &T[i][j]);\n' +
			'\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'    for(int j = 0; j < M; j++){\n' +
			'        float sum = 0;\n' +
			'        for(int i = 0; i < N; i++){\n' +
			'            sum += T[i][j];\n' +
			'        }\n' +
			'        AVG[j] = sum / N;\n' +
			'    }\n' +
			'\n' +
			'    printf("\\nProsecni broj sati po danima:\\n");\n' +
			'    for(int j = 0; j < M; j++){\n' +
			'        printf("Dan %d: %.2f sati\\n", j+1, AVG[j]);\n' +
			'    }\n' +
			'\n' +
			'}\n' +
			'\n',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2025_08_ispit/3',
		question: `Za potrebe firme koja organizuje isporuku paketa, potrebno je napraviti program za evidenciju posiljki. Za svaku posiljku cuvaju se sledeci podaci: ime primaoca, adresa primaoca, tezina paketa u kilogramima, cena slanja i status isporuke (1 - isporuceno, 0 - nije isporuceno). U glavnom programu kreirati staticki niz od 10 posiljki, ucitati podatke sa standardnog ulaza, a zatim pronaci i prikazati najtezu posiljku koja jos nije isporucena. Na kraju, program treba da prikaze sve unete posiljke, kao i posiljku sa najvecom tezinom koja jos nije isporucena. Prikaz informacija o posiljkama implementirati koriscenjem pomocne funkcije. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje navedene zahteve.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'#include <string.h>\n' +
			'\n' +
			'\n' +
			'typedef struct {\n' +
			'    char nameOfBuyer[50];\n' +
			'    char address[100];\n' +
			'    float weightInKg;\n' +
			'    float shipmentFee;\n' +
			'    int statusOfDelivery; // 1-delivered 0-not delivered\n' +
			'\n' +
			'\n' +
			'} Package;\n' +
			'\n' +
			'void displayPackage(Package p, int redniBroj) {\n' +
			'    printf("\\n--- Pošiljka %d ---\\n", redniBroj);\n' +
			'    printf("Ime primaoca: %s\\n", p.nameOfBuyer);\n' +
			'    printf("Adresa: %s\\n", p.address);\n' +
			'    printf("Težina: %.2f kg\\n", p.weightInKg);\n' +
			'    printf("Cena slanja: %.2f RSD\\n", p.shipmentFee);\n' +
			'    printf("Status: %s\\n", p.statusOfDelivery == 1 ? "Isporučeno" : "Nije isporučeno");\n' +
			'}\n' +
			'\n' +
			'void Z3_OP_2025_08_ispit(){\n' +
			'\n' +
			'    int N = 10;\n' +
			'\n' +
			'\n' +
			'    Package *packages = malloc(N * sizeof(Package));\n' +
			'\n' +
			'\n' +
			'\n' +
			'\n' +
			'    for(int i = 0; i < N; i++) {\n' +
			'        printf("Posiljka %d:\\n", i+1);\n' +
			'        printf("Ime primaoca: ");\n' +
			'        scanf("%s", packages[i].nameOfBuyer);\n' +
			'\n' +
			'        printf("Adresa: ");\n' +
			'        scanf("%s", packages[i].address);\n' +
			'\n' +
			'        printf("Težina (kg): ");\n' +
			'        scanf("%f", &packages[i].weightInKg);\n' +
			'\n' +
			'        printf("Cena slanja: ");\n' +
			'        scanf("%f", &packages[i].shipmentFee);\n' +
			'\n' +
			'        printf("Status (1-isporučeno, 0-nije): ");\n' +
			'        scanf("%d", &packages[i].statusOfDelivery);\n' +
			'\n' +
			'        printf("\\n");\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'    int najtezaIndex = -1;\n' +
			'    float maxTezina = -1;\n' +
			'\n' +
			'    for(int i = 0; i < N; i++) {\n' +
			'        if(packages[i].statusOfDelivery == 0) {\n' +
			'            if(packages[i].weightInKg > maxTezina) {\n' +
			'                maxTezina = packages[i].weightInKg;\n' +
			'                najtezaIndex = i;\n' +
			'            }\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'    printf("\\n======================================");\n' +
			'    printf("\\nSVE UNETE POSILJKE:\\n");\n' +
			'    printf("======================================");\n' +
			'    for(int i = 0; i < N; i++) {\n' +
			'        displayPackage(packages[i], i+1);\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'    printf("\\n======================================");\n' +
			'    printf("\\nNAJTEŽA NEISPORUČENA POŠILJKA:\\n");\n' +
			'    printf("======================================");\n' +
			'\n' +
			'    if(najtezaIndex != -1) {\n' +
			'        displayPackage(packages[najtezaIndex], najtezaIndex+1);\n' +
			'        printf("\\nTežina: %.2f kg\\n", packages[najtezaIndex].weightInKg);\n' +
			'    } else {\n' +
			'        printf("\\nNema neisporučenih pošiljki!\\n");\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'\n' +
			'\n',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2025_09_1_ispit/1',
		question: `Korisnik unosi prirodne brojeve sve dok ne unese nulu. Za svaki uneti broj potrebno je izracunati zbir faktorijela svih njegovih cifara. Ako je zbir deljiv sa 3, broj se dodaje na ukupnu sumu. Ako zbir nije deljiv sa 3, broj se ignorise. Nakon unosa nule, program prikazuje sumu svih unetih brojeva ciji je zbir faktorijela njihovih cifara deljiv sa 3. Potrebno je nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji resava opisane zahteve. Napomena: Izracunavanje faktorijela cifara unetih brojeva potrebno je realizovati iskljucivo pomocu funkcije.`,
		answerCode:
			'#include <stdio.h>\n' +
			'\n' +
			'int faktorijel(int n) {\n' +
			'    int rez = 1;\n' +
			'    for(int i = 1; i <= n; i++) {\n' +
			'        rez *= i;\n' +
			'    }\n' +
			'    return rez;\n' +
			'}\n' +
			'\n' +
			'int zbirFaktorijelaCifara(int broj) {\n' +
			'    int zbir = 0;\n' +
			'    int temp = broj;\n' +
			'\n' +
			'    while(temp > 0) {\n' +
			'        int cifra = temp % 10;\n' +
			'        zbir += faktorijel(cifra);\n' +
			'        temp /= 10;\n' +
			'    }\n' +
			'\n' +
			'    return zbir;\n' +
			'}\n' +
			'void Z1_OP_2025_09_ispit() {\n' +
			'    int broj;\n' +
			'    int ukupnaSuma = 0;\n' +
			'\n' +
			'    printf("Unosite prirodne brojeve (0 za kraj):\\n");\n' +
			'\n' +
			'    do {\n' +
			'        scanf("%d", &broj);\n' +
			'\n' +
			'        if(broj != 0) {\n' +
			'            int zbirFaktora = zbirFaktorijelaCifara(broj);\n' +
			'\n' +
			'            if(zbirFaktora % 3 == 0) {\n' +
			'                ukupnaSuma += broj;\n' +
			'            }\n' +
			'        }\n' +
			'\n' +
			'    } while(broj != 0);\n' +
			'\n' +
			'    printf("Suma brojeva ciji je zbir faktorijela cifara deljiv sa 3: %d\\n", ukupnaSuma);\n' +
			'}\n',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2025_09_1_ispit/2',
		question: `U jednoj turistickoj agenciji prati se broj prodatih aranzmana za razlicite destinacije tokom meseca. Matrica dimenzija NxM predstavlja broj aranzmana koje je svaki zaposleni (red) prodao u svakom od M meseci (kolone). Direktor zeli da napravi izvestaj u kome ce se izracunati ukupan broj prodatih aranzmana za svaki mesec. Ovi zbirovi se smestaju u dinamicki niz dimenzije M, tako da svaki element tog niza predstavlja ukupan broj aranzmana prodatih u odgovarajucem mesecu. Nakon popunjavanja matrice, potrebno je prikazati sve unete podatke u matrici, a zatim i sve elemente niza sa zbirovima po mesecima. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje zadate zahteve.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'#include <string.h>\n' +
			'void Z2_OP_2025_09_ispit() {\n' +
			'    int N, M;\n' +
			'\n' +
			'    printf("Unesite broj zaposlenih: ");\n' +
			'    scanf("%d", &N);\n' +
			'    printf("Unesite broj meseci: ");\n' +
			'    scanf("%d", &M);\n' +
			'\n' +
			'    int T[N][M];\n' +
			'    int *meseciSuma = (int*)malloc(M * sizeof(int));\n' +
			'\n' +
			'    if(meseciSuma == NULL) {\n' +
			'        printf("Greska pri alokaciji memorije!\\n");\n' +
			'        return;\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'    printf("Unesite broj prodatih aranzmana za svakog zaposlenog po mesecima:\\n");\n' +
			'    for(int i = 0; i < N; i++) {\n' +
			'        printf("Zaposleni %d: ", i+1);\n' +
			'        for(int j = 0; j < M; j++) {\n' +
			'            scanf("%d", &T[i][j]);\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			' \n' +
			'    printf("\\nMatrica prodatih aranzmana:\\n");\n' +
			'    printf("     ");\n' +
			'    for(int j = 0; j < M; j++) {\n' +
			'        printf("Mesec %d ", j+1);\n' +
			'    }\n' +
			'    printf("\\n");\n' +
			'\n' +
			'    for(int i = 0; i < N; i++) {\n' +
			'        printf("Z%d:  ", i+1);\n' +
			'        for(int j = 0; j < M; j++) {\n' +
			'            printf("%6d  ", T[i][j]);\n' +
			'        }\n' +
			'        printf("\\n");\n' +
			'    }\n' +
			'\n' +
			'    \n' +
			'    for(int j = 0; j < M; j++) {\n' +
			'        meseciSuma[j] = 0;\n' +
			'        for(int i = 0; i < N; i++) {\n' +
			'            meseciSuma[j] += T[i][j];\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'   \n' +
			'    printf("\\nUkupan broj prodatih aranzmana po mesecima:\\n");\n' +
			'    for(int j = 0; j < M; j++) {\n' +
			'        printf("Mesec %d: %d aranzmana\\n", j+1, meseciSuma[j]);\n' +
			'    }\n' +
			'\n' +
			'    free(meseciSuma);\n' +
			'}\n',
		answerAlgorithm: {}
	},
	{
		id: 'OP_2025_09_1_ispit/3',
		question: `Za potrebe biblioteke potrebno je napraviti program za evidenciju knjiga. Za svaku knjigu cuvaju se sledeci podaci: naslov, autor, broj strana, godina izdavanja i status dostupnosti (1 - dostupna, 0 - iznajmljena). U glavnom programu kreirati staticki niz od 10 knjiga, ucitati podatke sa standardnog ulaza, a zatim pronaci i prikazati knjigu sa najvecim brojem strana koja je trenutno dostupna. Na kraju, program treba da prikaze sve unete knjige, kao i knjigu sa najvecim brojem strana koja je dostupna. Prikaz informacija o posiljkama implementirati koriscenjem pomocne funkcije. Nacrtati strukturni dijagram toka algoritma i na programskom jeziku C napisati strukturni program koji realizuje navedene zahteve. Napomena: Prilikom unosa tekstualnih podataka (npr. autor iz strukture Knjiga) potrebno je voditi racuna o zaostalom karakteru novog reda ("\n") u baferu. Zbog toga je neophodno koristiti funkciju getchar() pre fgets da bi se ocistio bafer, kao i brisanje karaktera novog reda nakon unosa pomocu knjige[i].autor[strcspn(knjige[i].autor, "\n")] = '\0'; nakon fgets.`,
		answerCode:
			'#include <stdio.h>\n' +
			'#include <stdlib.h>\n' +
			'#include <string.h>\n' +
			'\n' +
			'typedef struct {\n' +
			'    char naslov[100];\n' +
			'    char autor[100];\n' +
			'    int brojStrana;\n' +
			'    int godinaIzdanja;\n' +
			'    int status; // 1 - dostupna, 0 - iznajmljena\n' +
			'} Knjiga;\n' +
			'\n' +
			'void prikaziKnjigu(Knjiga k, int redniBroj) {\n' +
			'    printf("\\n--- Knjiga %d ---\\n", redniBroj);\n' +
			'    printf("Naslov: %s", k.naslov);\n' +
			'    printf("Autor: %s", k.autor);\n' +
			'    printf("Broj strana: %d\\n", k.brojStrana);\n' +
			'    printf("Godina izdanja: %d\\n", k.godinaIzdanja);\n' +
			'    printf("Status: %s\\n", k.status == 1 ? "Dostupna" : "Iznajmljena");\n' +
			'}\n' +
			'\n' +
			'void Z3_OP_2025_09_ispit() {\n' +
			'    int N = 10;\n' +
			'    Knjiga knjige[N];\n' +
			'\n' +
			'    printf("Unos podataka za 10 knjiga:\\n\\n");\n' +
			'\n' +
			'   \n' +
			'    for(int i = 0; i < N; i++) {\n' +
			'        printf("Knjiga %d:\\n", i+1);\n' +
			'\n' +
			'        getchar(); \n' +
			'\n' +
			'        printf("Naslov: ");\n' +
			'        fgets(knjige[i].naslov, sizeof(knjige[i].naslov), stdin);\n' +
			'        knjige[i].naslov[strcspn(knjige[i].naslov, "\\n")] = \'\\0\';\n' +
			'\n' +
			'        printf("Autor: ");\n' +
			'        fgets(knjige[i].autor, sizeof(knjige[i].autor), stdin);\n' +
			'        knjige[i].autor[strcspn(knjige[i].autor, "\\n")] = \'\\0\';\n' +
			'\n' +
			'        printf("Broj strana: ");\n' +
			'        scanf("%d", &knjige[i].brojStrana);\n' +
			'\n' +
			'        printf("Godina izdanja: ");\n' +
			'        scanf("%d", &knjige[i].godinaIzdanja);\n' +
			'\n' +
			'        printf("Status (1-dostupna, 0-iznajmljena): ");\n' +
			'        scanf("%d", &knjige[i].status);\n' +
			'\n' +
			'        printf("\\n");\n' +
			'    }\n' +
			'\n' +
			'\n' +
			'    int najvecaIndex = -1;\n' +
			'    int maxStrana = -1;\n' +
			'\n' +
			'    for(int i = 0; i < N; i++) {\n' +
			'        if(knjige[i].status == 1) { // ako je dostupna\n' +
			'            if(knjige[i].brojStrana > maxStrana) {\n' +
			'                maxStrana = knjige[i].brojStrana;\n' +
			'                najvecaIndex = i;\n' +
			'            }\n' +
			'        }\n' +
			'    }\n' +
			'\n' +
			'    \n' +
			'    printf("\\n======================================\\n");\n' +
			'    printf("SVE UNETE KNJIGE:\\n");\n' +
			'    printf("======================================");\n' +
			'    for(int i = 0; i < N; i++) {\n' +
			'        prikaziKnjigu(knjige[i], i+1);\n' +
			'    }\n' +
			'\n' +
			'    \n' +
			'    printf("\\n======================================\\n");\n' +
			'    printf("KNJIGA SA NAJVECIM BROJEM STRANA KOJA JE DOSTUPNA:\\n");\n' +
			'    printf("======================================");\n' +
			'\n' +
			'    if(najvecaIndex != -1) {\n' +
			'        prikaziKnjigu(knjige[najvecaIndex], najvecaIndex+1);\n' +
			'        printf("\\nBroj strana: %d\\n", knjige[najvecaIndex].brojStrana);\n' +
			'    } else {\n' +
			'        printf("\\nNema dostupnih knjiga!\\n");\n' +
			'    }\n' +
			'}',
		answerAlgorithm: {}
	}
];
