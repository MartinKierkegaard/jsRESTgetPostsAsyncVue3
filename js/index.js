const baseUri = "http://jsonplaceholder.typicode.com/posts"

Vue.createApp({
    data() {
        return {
            posts: [],
            error: null,
            userId: ""
        }
    },
    async created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded
        console.log("created method called")
        this.getAllPosts()
    },
    methods: {
        cleanList() {
            this.posts = []
            this.error = null
            console.log("count post : " + this.posts.length)
        },
        
         getAllPosts() {
            axios.get(baseUri)
            .then(function (response) {

             var divtag = document.getElementById("content");
              //resultElement.innerHTML = generateSuccessHTMLOutput(response);
              console.log("in helper posts");
              console.log("response : "+ response.data);
              console.log("status : " );
              this.posts = response.data;
              
              console.log("length post " + this.posts.length)

              let res = "";
                for (let i = 0; i < posts.length; i++) {
                    console.log(this.posts[i].id)
                    console.log(this.posts[i].title)

                    res = res + this.posts[i].id + " " + this.posts[i].title + " " + "</br>";
                }

                divtag.innerHTML= res;

            })
            .catch(function (error) {
              //resultElement.innerHTML = generateErrorHTMLOutput(error);
              this.posts = []
              this.error = ex.message
              console.log("Error:" + this.error);
            })      
            
        },
       
       
    }
}).mount("#app")