import Kommentar from "./Interfaces/IPostComment";
import Post from './Interfaces/IPostComment';

async function kommentarePost1(): Promise<Kommentar[]> {
    try {
    const kommentarApi = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');

    if(!kommentarApi.ok){
        throw new Error(`API meldet Fehler Status ${kommentarApi.status}`)
    } 
    const kommentare = await kommentarApi.json() as Kommentar[];
    console.log('Kommentarliste:', kommentare);
    return kommentare
}
    catch(fehler) {
        console.error('API-Aufruf Fehler', fehler)
        throw fehler
    }
    finally{
        console.log('Die Kommentare wurden erfolgreich geladen');
    }
}
kommentarePost1()
    .then(kommentare => {
        kommentare.forEach(kommentar => {
            console.log(`ID: ${kommentar.id}, ${kommentar.postId}, ${kommentar.email}, ${kommentar.body}`);
        })
    })
    .catch(fehler => {
        console.error('Fehler bei der Verarbeitung', fehler)
    })
kommentarePost1()
.then(kommentare => {
    kommentare.forEach(kommentar => {
        console.log(`EmailAdresse: ${kommentar.email} `);
    })
})
.catch(fehler => {
    console.error('Fehler bei der Bearbeitung', fehler)
})

async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok) {
            throw new Error(`Api meldet Fehler Status ${response.status}`)
        }
        const posts = await response.json() as Post[];
        return posts
    } catch(error) {
        console.error('Fehler beim Abrufen der Posts', error)
        throw error
    }
}

fetchPosts()
    .then(posts => {
        console.log('Alle Posts', posts);
        const hochsteID = Math.max(...posts.map(post => post.id))
        console.log('Höchste Post-ID', hochsteID);
        let kurzesterTitel = posts[0].title; 
        for (let i = 1; i< posts.length; i++){
            if (posts[i].title.length < kurzesterTitel.length){
                kurzesterTitel = posts[i].title
            }
        }
        console.log('Kürzester Titel', kurzesterTitel);
        let langsterBody = posts[0].body;
        for (let i= 1; i<posts.length; i++){
            if (posts[i].body.length > langsterBody.length) {
                langsterBody = posts[i].body;
            }
        }
        console.log('Längster Body', langsterBody);
        
    })


