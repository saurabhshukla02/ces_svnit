const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 4000;



// EXPRESS SPECIFIC STUFF:
app.use('/public', express.static('public')); //For serving the static files
app.use(express.urlencoded());


// ejs TEMPLATE SPECIFIC STUFF:
app.set('view engine', 'ejs'); //Set the template engine as ejs
app.set('views', path.join(__dirname, 'views')); //Set the views directory


// GET ROUTES
app.get("/", (req, res)=>{
    
    const params = {
        'title': 'Civil Engineering Society, NIT Surat',
    };
    res.status(200).render('home.ejs', params);
})





app.get("/events/kaizen-2020", (req, res)=>{

    const params = {
        'title': 'Kaizen-2020 | CES Event, NIT Surat',
    }
    res.status(200).render('kaizen-2020.ejs', params);
})

app.get("/events/kaizen-2020/tech-events", (req, res)=>{

    const params = {
        'title': 'Technical Events | Kaizen-2020, CES NIT Surat',
    }
    res.status(200).render('kaizen-2020-tech-events.ejs', params);
})

app.get("/events/kaizen-2020/managerial-events", (req, res)=>{

    const params = {
        'title': 'Managerial Events | Kaizen-2020, CES NIT Surat',
    }
    res.status(200).render('kaizen-2020-managerial-events.ejs', params);
})

app.get("/events/kaizen-2020/informal-events", (req, res)=>{

    const params = {
        'title': 'Informal Events | Kaizen-2020, CES NIT Surat',
    }
    res.status(200).render('kaizen-2020-informal-events.ejs', params);
})











app.get("/events/kaizen-2021", (req, res)=>{

    const params = {
        'title': 'Kaizen-2021 | CES Event, NIT Surat',
    }
    res.status(200).render('kaizen-2021.ejs', params);
})

app.get("/events/kaizen-2021/tech-events", (req, res)=>{

    const params = {
        'title': 'Technical Events | Kaizen-2021, CES NIT Surat',
    }
    res.status(200).render('kaizen-2021-tech-events.ejs', params);
})

app.get("/events/kaizen-2021/managerial-events", (req, res)=>{

    const params = {
        'title': 'Managerial Events | Kaizen-2021, CES NIT Surat',
    }
    res.status(200).render('kaizen-2021-managerial-events.ejs', params);
})

app.get("/events/kaizen-2021/informal-events", (req, res)=>{

    const params = {
        'title': 'Informal Events | Kaizen-2021, CES NIT Surat',
    }
    res.status(200).render('kaizen-2021-informal-events.ejs', params);
})








app.get('/people/core-committee-2021-22', (req, res)=>{

    const params = {
        'title': 'Core committee 2021-22 | CES SVNIT'
    }
    res.status(200).render('core-members-2021-22.ejs', params);
})




app.get('/people/core-committee-2020-21', (req, res)=>{

    const params = {
        'title': 'Core committee 2020-21 | CES SVNIT'
    }
    res.status(200).render('core-members-2020-21.ejs', params);
})




app.get('/people/core-committee-2019-20', (req, res)=>{

    const params = {
        'title': 'Core committee 2019-20 | CES SVNIT'
    }
    res.status(200).render('core-members-2019-20.ejs', params);
})








app.get('/ces/articles', (req, res)=>{

    const params = {
        'title': 'Articles | CES NIT Surat',
        
        'article12title': 'Infrastructure Development Over the Years',
        'article12writer': 'Vibha Elsa, Sakshi Bhushan, Arogya Tiwari ',
        'article12introduction': '',
        'article12date': 'March 10, 2022',
        
        'article11title': 'Construction Management',
        'article11writer': 'Tanisha Jain, Ved Patel, Dixit Singhal',
        'article11introduction': '',
        'article11date': 'Februray 20, 2022',
        
        'article10title': 'Smart Transportation Systems',
        'article10writer': 'Pushpendra Bhakar, Ganesh, Kripal Singh, Bhavesh Jangid',
        'article10introduction': '',
        'article10date': 'January 31, 2022',
        
        'article9title': 'Smart Irrigation Systems',
        'article9writer': 'Shubham Kumar',
        'article9introduction': '',
        'article9date': 'January 18, 2022',
        
        'article8title': 'Smart Wastewater Management System: Reliable and Sustainable',
        'article8writer': 'Abhishek Tiwari, Sriya Rao',
        'article8introduction': '',
        'article8date': 'January 4, 2022',
        
        'article7title': 'Smart Building: Transforming the Built Environment',
        'article7writer': 'Aniket Maru, A Sree Valli, Yashvi Unadkat',
        'article7introduction': '',
        'article7date': 'December 20, 2021',

        'article1title': 'Atal Tunnel, World’s longest highway tunnel opened in Himachal Pradesh',
        'article1writer': 'Abhay Singh Tomar',
        'article1introduction': '',
        'article1date': 'February 16, 2021',

        'article2title': 'Sir M.Visvesvaraya, The Father of Indian Engineering',
        'article2writer': 'Aditya Jhajharia',
        'article2introduction': '',
        'article2date': 'February 19, 2021',

        'article3title': 'The Flatiron Building in Manhattan, New York city',
        'article3writer': 'Vaishnavi Kulhade',
        'article3introduction': '',
        'article3date': 'February 12, 2021',

        'article4title': 'China’s massive Three Gorges Dam, Breath-taking, Heart-Pounding Structure.',
        'article4writer': 'Om Gheewala',
        'article4introduction': '',
        'article4date': 'January 21, 2021',

        'article5title': 'A visual history of skyscrapers [infographic]',
        'article5writer': 'Pradeep Kumar Baitha',
        'article5introduction': '',
        'article5date': 'January 25, 2021',

        'article6title': 'Metro Man of India, Elattuvalapil Sreedharan',
        'article6writer': 'Supriya Divvela',
        'article6introduction': '',
        'article6date': 'February 9, 2021',
    }
    res.status(200).render('articles.ejs', params);
})

app.get("/ces/articles/infra", (req, res)=>{

    const params = {
        'title': 'Infrastructure Development Over the Years',
        'writer': 'Vibha Elsa, Sakshi Bhushan, Arogya Tiwari',
        'date': 'March 10, 2022'
    }
    res.status(200).render('infra.ejs', params);
})


app.get("/ces/articles/construction-manage", (req, res)=>{

    const params = {
        'title': 'Construction Management',
        'writer': 'Tanisha Jain, Ved Patel, Dixit Singhal',
        'date': 'Februray 20, 2022'
    }
    res.status(200).render('construction-manage.ejs', params);
})


app.get("/ces/articles/smart-transport", (req, res)=>{

    const params = {
        'title': 'Smart Transportation Systems',
        'writer': 'Pushpendra Bhakar, Ganesh, Kripal Singh, Bhavesh Jangid',
        'date': 'January 31, 2022'
    }
    res.status(200).render('smart-transport.ejs', params);
})


app.get("/ces/articles/smart-irrigation", (req, res)=>{

    const params = {
        'title': 'Smart Irrigation Systems',
        'writer': 'Shubham Kumar',
        'date': 'January 18, 2022'
    }
    res.status(200).render('smart-irrigation.ejs', params);
})

app.get("/ces/articles/smart-waste", (req, res)=>{

    const params = {
        'title': 'Smart Wastewater Management System: Reliable and Sustainable',
        'writer': 'Abhishek Tiwari, Sriya Rao',
        'date': 'January 4, 2022'
    }
    res.status(200).render('smart-wastewater.ejs', params);
})

app.get("/ces/articles/smart-building", (req, res)=>{

    const params = {
        'title': 'Smart Building: Transforming the Built Environment',
        'writer': 'Aniket Maru, A Sree Valli, Yashvi Unadkat',
        'date': 'December 20, 2021'
    }
    res.status(200).render('smart-building.ejs', params);
})


app.get("/ces/articles/atal-tunnel-worlds-longest-highway-tunnel", (req, res)=>{

    const params = {
        'title': 'Atal Tunnel, World’s longest highway tunnel opened in Himachal Pradesh',
        'writer': 'Abhay Singh Tomar',
        'date': 'February 16, 2021'
    }
    res.status(200).render('atal-tunnel.ejs', params);
})


app.get("/ces/articles/Sir-M-Visvesvaraya-The-Father-of-Indian-Engineering", (req, res)=>{

    const params = {
        'title': 'Sir M.Visvesvaraya-The Father of Indian Engineering',
        'writer': 'Aditya Jhajharia',
        'date': 'February 19, 2021',

    }
    res.status(200).render('visvesvarya.ejs', params);
})

app.get("/ces/articles/The-Flatiron-Building", (req, res)=>{

    const params = {
        'title': 'The Flatiron Building',
        'writer': 'Vaishnavi Kulhade',
        'date': 'February 12, 2021',
    }
    res.status(200).render('flatiron-building.ejs', params);
})

app.get("/ces/articles/Three-Gorges-Dam", (req, res)=>{

    const params = {
        'title': 'Three Gorges Dam - China',
        'writer': 'Om Gheewala',
        'date': 'January 21, 2021',
    }
    res.status(200).render('three-gorges-dam.ejs', params);
})

app.get('/ces/articles/history-of-skyscrapers', (req, res)=>{

    const params = {
        'title': 'visual history of skyscrapers',
        'writer': 'Pradeep Kumar Baitha',
        'date': 'January 25, 2021',
    }
    res.status(200).render('skyscrapers.ejs', params);
})

app.get('/ces/articles/metro-man-of-india-Sreedharan', (req, res)=>{

    const params = {
        'title': 'Metro Man of India - Elattuvalapil Sreedharan',
        'writer': 'Supriya Divvela',
        'date': 'February 9, 2021',
    }
    res.status(200).render('sreedharan.ejs', params);
})







// START THE SERVER
app.listen(process.env.PORT || port, ()=>{
    console.log(`The application started sucessfully at port: ${port}`);
})
