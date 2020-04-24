var website_text = document.getElementById('website');
var linkedin_text = document.getElementById('linkedin');
var medium_text= document.getElementById('medium');
var twitter_text= document.getElementById('twitter');
var github_text= document.getElementById('github');
var quora_text = document.getElementById('quora');
var codechef_text = document.getElementById('codechef');
var spoj_text = document.getElementById('spoj');
var hackerrank_text = document.getElementById('hackerrank');
var codeforces_text = document.getElementById('codeforces');
var stackoverflow_text = document.getElementById('stackoverflow');
var freecodecamp_text = document.getElementById('freecodecamp');
var leetcode_text = document.getElementById('leetcode');
var atcoder_text = document.getElementById('atcoder');
var facebook_text = document.getElementById('facebook');

var save_button = document.getElementById('save');

let array = ["website","linkedin","medium","twitter","github","quora","codechef","spoj","hackerrank","codeforces","stackoverflow","freecodecamp","atcoder","facebook","leetcode"];
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.website)
            website_text.value=links.website;
        if(links.linkedin)
            linkedin_text.value=links.linkedin;
        if(links.medium)
            medium_text.value=links.medium;
        if(links.twitter)
            twitter_text.value=links.twitter;
        if(links.github)
            github_text.value=links.github;
         if(links.quora)
            quora_text.value=links.quora;
        if(links.codechef)
            codechef_text.value=links.codechef;
       if(links.spoj)
            spoj_text.value=links.spoj;
       if(links.hackerrank)
            hackerrank_text.value=links.hackerrank;
       if(links.codeforces)
            codeforces_text.value=links.codeforces;
       if(links.stackoverflow)
            stackoverflow_text.value=links.stackoverflow;
       if(links.freecodecamp)
            freecodecamp_text.value=links.freecodecamp;
       if(links.facebook)
            facebook_text.value=links.facebook;
       if(links.leetcode)
            leetcode_text.value=links.leetcode;
       if(links.atcoder)
            atcoder_text.value=links.atcoder;
       
    }
});


save_button.addEventListener('click',function(){
    UpdateLinks();
});
function UpdateLinks(){
    let dict = {
        "website":website_text.value,
        "linkedin":linkedin_text.value,
        "medium":medium_text.value,
        "twitter":twitter_text.value,
        "github":github_text.value,
        "codeforces":codeforces_text.value,
        "codechef":codechef_text.value,
        "atcoder":atcoder_text.value,
        "facebook":facebook_text.value,
        "spoj":spoj_text.value,
        "leetcode":leetcode_text.value,
        "freecodecamp":freecodecamp_text.value,
        "stackoverflow":stackoverflow_text.value,
        "hackerrank":hackerrank_text.value,
        "quora":quora_text.value,

    };
    chrome.storage.sync.set(dict,function(){
        if(!chrome.runtime.error){
            console.log("Links Updated");
            window.location.pathname='popup.html'
        }
    });
}