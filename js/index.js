const baseUri = "http://jsonplaceholder.typicode.com/posts"

Vue.createApp({
    data() {
        return {
            nyliste:[],
            posts: [],
            error: null,
            userId: ""
        }
    },
     created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded
        console.log("created method called")
        this.getAllPosts()
    },
    methods: {
        cleanList() {
            this.posts = [];
            this.error = null;
            console.log("count post : " + this.posts.length);
        },
        //Read this for an example: https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
         getAllPosts() {
             //axios call that returns all the elements from the webservice
            axios.get(baseUri)
            .then(response => {
             var divtag = document.getElementById("content");

             console.log("in function getAllPosts");
             console.log("status code: "+ response.status );

             //add the returning data from the webservice to the variable posts
             this.posts = response.data;
              
             console.log("length of the posts array " + this.posts.length)

            //   let res = "";
            //     for (let i = 0; i < posts.length; i++) {
            //         console.log(this.posts[i].id)
            //         console.log(this.posts[i].title)

            //         res = res + this.posts[i].id + " " + this.posts[i].title + " " + "</br>";
            //     }

                // divtag.innerHTML= res;

            })
            .catch(error = (ex) => {
              //resultElement.innerHTML = generateErrorHTMLOutput(error);
              this.posts = []
               this.error = ex.message
              console.log("Error:" + this.error);
            })      
            
        },
        getByUserId(id){
            //axios call that returns the items from a specified user 
            axios.get(baseUri + "?userId="  + id)
            .then(response => {
            
            console.log("URI: " + baseUri + "?userId=" +id)

             console.log("in function getByUserId");
             console.log("status code: "+ response.status );

             //add the returning data from the webservice to the variable posts
             this.posts = response.data;
              
             console.log("length of the posts array " + this.posts.length)
            })
            .catch(error = (ex) => {
              this.posts = []
              this.error = ex.message
              console.log("Error:" + this.error);
            })      

        },
       
       
    }
}).mount("#app")