const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
            headers:{
              Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2IwNDJiOWMyN2RjMWRmZjI4OTZmMTExZjQ0NTE2NCIsInN1YiI6IjY0MDAwNGJhOWYxYmU3MDA4NjlmYmM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F4E3ZrXFfyIHiiMxciiwGlETfDkqIK5WqDCRO-iapNM",
              "Content-Type" : "application/json;charset=utf-8",

            },
          })
            .then((res) => res.json())
}