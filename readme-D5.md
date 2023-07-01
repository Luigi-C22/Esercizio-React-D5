Continuiamo a lavorare su EPICBOOKS!
1. Sposta il campo di ricerca in un componente navbar posto in cima, dovrà sempre essere utilizzato per filtrare i libri della lista all'interno di LatestRelease.
Il tuo compito per oggi è di farlo usando la state elevation.

2. Melle prossime slide troverai le istruzioni passo per passo!


TASKS:
1. Converti App in un componente classe, e crea al suo interno lo stato con una proprietà chiamata 'query'. Questa proprietà conterrà una stringa.

2. Crea un componente MyNavbar, prendendo ad esempio la navbar di react-bootstrap.
Aggiungi al suo interno un input di tipo testo.
Renderizza il componente MyNavbar all'interno di App. Questo componente prenderà due props:
         a. query, che prenderà il valore di "query" nello stato di App
         b. una seconda prop con un nome a tua scelta (idealmente setQuery o simili), che avrà come valore una funzione che prenda un parametro e cambi il valore di query nello stato di App nel valore di quel parametro.

3. Quella queste due prop all'input dentro MyNavbar, rendendolo un input controllato

4. Passa il valore di query dallo stato di App anche al componente LatestRelease, usando una prop con nome a tua scelta.

5. Usa questa prop di LatestRelease per filtrare i libri. Dovresti già avere questa funzionalità, dovrai solo cambiare l'origine della query, che non sarà più salvata nello stato, ma proverrà dalle props.


EXTRA (facoltativi):
1. Permettere all'applicazione di avere solo UN libro selezionato alla volta; cliccando su una copertina diversa, il libro precedente deve de-selezionarsi, e il nuovo libro selezionato deve aggiornare la lista dei commenti.
Questo richiederà di elevare la proprietà 'selected', dallo stato di SingleBook, allo stato di BookList, e il suo valore non sarà più true/false ma conterrà l'ASIN del libro attualmente selezionato. Per raggiungere questa funzionalità puoi seguire la strategia che hai appena messo in atto per il task precedente.

2. Utilizza React.Context per condividere con l'intera applicazione una proprietà 'theme': il suo valore può essere light o dark, e deve influenzare qualche proprietà visiva dei componenti principali (MyNavbar, BookList, SingleBook etc.).
Fornisci anche un modo per cambiare valore alla proprietà 'theme' (da light a dark e viceversa) e verifica che l'applicazione riceva il nuovo valore alla modifica dello stesso.

