import React from 'react'
import Cards from './components/Cards'

const App = () => {
 
  const jobOpenings = [
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    name: "Microsoft",
    datePosted: "8 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    name: "Meta",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    name: "Spotify",
    datePosted: "7 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    name: "Adobe",
    datePosted: "3 days ago",
    post: "UI Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    name: "Salesforce",
    datePosted: "12 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
    name: "Uber",
    datePosted: "6 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Kolkata, India"
  },
  {
    brandlogo: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
    name: "Airbnb",
    datePosted: "9 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Ahmedabad, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        // this idx is only written for understanding for react not other purpose. Reason ki react her element ko uniquely identify kr paye
        return <div key={idx}>
          <Cards key={idx} company={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandlogo} pay={elem.pay} tag2={elem.tag2} place={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App