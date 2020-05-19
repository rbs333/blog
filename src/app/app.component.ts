import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text1 = "<div>Thank God for Monday <br> This weekend's been getting long <br> Too much time for thinking and <br> There's work to be done <br> But thank God for Friday <br> When I'm tired of this shit <br> Selling things that don't matter <br> To a new generation of kids <br> <br> Some days I think I'm important <br> Cause my job has a fancy name <br> Cause I went to a name-brand school <br> And was told: I'm-above-average-for-my-age <br> <br> I'm sorry when I'm like that <br> It doesn't mean a thing <br> But when that's your version of winning <br> You learn to cling <br> <br> So thank God for your patience <br> As I pace around the house <br> On your one day off <br><br> This is how I've always been <br> And probably how I'll be <br> So I'm learning to be present <br> Despite my big, big dreams <br> Some days I'm distant <br> It doesn't mean nothing <br> And I know it messes with your head <br> <br> I'm sorry when I'm like that <br> I know it hurts us both <br> But there are so many things <br> I'm not ready to let go <br><br> So thank God for grace <br> The ability to be sincere <br> And know my depth <br> Is a disguise for my fear <br><br> </div>";
  
  contentVideo = { 
    id: "1",
    title: "Thank God for Monday",
    text: this.text1,
    video: "https://www.youtube.com/embed/Rx942Z2aU8s",
  };

  contentText = {
    id: '2',
    title: 'Two Month Ago',
    text: 'Two month ago, I left for New Orleans to live-it-up before graduation. I can remember the feeling of riding the streetcar towards Bourbon St. late on a Monday night. The pleasant sound of my friend’s mumbling, as they bonded over obscure rappers, that sound in collaboration with the clanging rumble of the streetcar still rings faintly in my memory. Add to it, the feeling of my fresh, perfectly fitting jean jacket that I had picked up at a anime hip hop consignment store in Jackson the day before… and I was feeling alright. As for Bourbon itself, it couldn’t live up to the anticipation of arrival that night - despite open carry laws, sublime trombone solos, and the boobs of some lady from Florida flaunting herself for beads and a laugh with her buddies when they reflect on their “wild trip to NoLa” at brunch next month. <br> Fast forward two months now and I imagine that same streetcar headed towards Bourbon but empty. No college kids with unnecessary jackets, no couples from Sweden, no families from Starkville riding the car on their way towards some fun and eventual beignets. I imagine the transit foreman with the moustache sitting sadly at home unable to boast to tourists his knowledge as to the location of authentic gumbo restaurants. This makes me sad.  <br> My friend tells me now of national guard humvees adjacent to testing tents for the disease, and I wonder if our pleasant uber driver is safe wherever she is staying. All I can do is imagine though and the last I actually saw of the deep south was a Cracker-Barrel in Alabama where we found out our semester would be completed in a browser. <br> Luckily for me, our next stop after the Cracker-Barrel was my girlfriend’s place just outside Charlotte where I would spend the next month and a half watching lectures and planting our (or more accurately her) first garden. I remember our daily walks weaving around the suburban neighborhood in every permutation possible after her day spent trying to teach somewhat stupid 9th graders double object pronouns in Spanish over Google Meet. I think about the perfectly manicured lawns, the Trump flags, and the kids: fat, skinny; brown, black, and white riding their bikes around their driveways and down the street. I wondered then, if they feel now like I did as “the homeschooled kid” waiting for everyone else to get home from “real” school, but my own narcissism aside, I bet this is shaping them in a thousand subtle ways at once. <br> I left back for Virginia last week, and in Virginia I lay on my belly, in my college town, waiting for my last test of undergrad and frankly I’m not sure what to feel.'
  };

  contentList = [this.contentVideo, this.contentText];
}
