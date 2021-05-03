window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

Promise.all([
    new Promise((resolve) => {
        var script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=UA-133546547-4";
        script.async = true;
        document.body.appendChild(script);
        resolve();
    }), 
    new Promise((resolve) => {
        gtag('js', new Date());
      
        gtag('config', 'UA-133546547-4');
        resolve();
    })
]);