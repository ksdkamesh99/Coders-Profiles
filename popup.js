var website_link = document.getElementById('website_link');
var linkedin_link = document.getElementById('linkedin_link');
var medium_link = document.getElementById('medium_link');
var twitter_link = document.getElementById('twitter_link');
var github_link = document.getElementById('github_link');
var quora_link = document.getElementById('quora_link');
var codechef_link = document.getElementById('codechef_link');
var spoj_link = document.getElementById('spoj_link');
var hackerrank_link = document.getElementById('hackerrank_link');
var codeforces_link = document.getElementById('codeforces_link');
var stackoverflow_link = document.getElementById('stackoverflow_link');
var freecodecamp_link = document.getElementById('freecodecamp_link');
var atcoder_link = document.getElementById('atcoder_link');
var facebook_link = document.getElementById('facebook_link');
var leetcode_link = document.getElementById('leetcode_link');


let array = ["website","linkedin","medium","twitter","github","quora","codechef","spoj","hackerrank","codeforces","stackoverflow","freecodecamp","atcoder","facebook","leetcode"];
// let array2 = {
//     "name":"Kamesh",
//     "website":"https://www.google.com",
//     "medium":"https://www.medium.com"
// };
// chrome.storage.sync.set(array2);

chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.website)
            website_link.href=links.website;
        else
            website_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.linkedin)
            linkedin_link.href=links.linkedin;
        else
            linkedin_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.medium)
            medium_link.href=links.medium;
        else
            medium_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.twitter)
            twitter_link.href=links.twitter;
        else
            twitter_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.github)
            github_link.href=links.github;
        else
            github_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.stackoverflow)
            stackoverflow_link.href=links.stackoverflow;
        else
            stackoverflow_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.quora)
            quora_link.href=links.quora;
        else
            quora_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.spoj)
            spoj_link.href=links.spoj;
        else
            spoj_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.freecodecamp)
            freecodecamp_link.href=links.freecodecamp;
        else
            freecodecamp_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.facebook)
            facebook_link.href=links.facebook;
        else
            facebook_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.atcoder)
            atcoder_link.href=links.atcoder;
        else
            atcoder_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.codeforces)
            codeforces_link.href=links.codeforces;
        else
            codeforces_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.codechef)
            codechef_link.href=links.codechef;
        else
            codechef_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.hackerrank)
            hackerrank_link.href=links.hackerrank;
        else
            hackerrank_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.leetcode)
            leetcode_link.href=links.leetcode;
        else
            leetcode_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        

    }
});