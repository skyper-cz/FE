import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable, of} from 'rxjs';
import {UserData} from './user/UserData';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserData[] = [

    {
      nick: "Monareccio",
      password: 'heslo1234',
      name: "Martin Macura",
      age: 23,
      skills: "Umí skvěle spamovat lidi v discordu\n hraje warthuinder a lolko",
      description: "ANgular",
      profilePic: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGBgaGBgYGBkYGhkYGBgYGBgaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQsJCs0NDQxNjQ2NDQ0NjQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0Mf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADgQAAIBAwMCBAMGBgEFAQAAAAECEQADIQQSMUFRBSJhcTKBkROhscHR8AYUQlJi4fEVcoKSoiP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgEEAgEEAwEAAAAAAAAAAQIRIQMSMUEEIhMyUWGxFIGRQv/aAAwDAQACEQMRAD8A8cFijoxqg5oiCsWQE3UG4KIIqlygAW6uI8VUiuE1VAMG7UU0FVo0UUAdDXWag7q6GpUIMlGD0qGoiualoKHtM8GtzTanFYFgVraZacOSWao1FBbUmqCgua3okaW6TXHegIajtRQBVerGgJRwaVAcZaGUom6ulqYUA2UNxTDGhOKY0gaCiTUWq3HpMTLoaKAKSS7TCPNJhRZxQ5qO9U3UUM6xoDmisaDcNFCoSv3aAuoq2opK4Ky7LSHf5qpWZvNSix0UDVZGoERRkNOhnajGutFcikAFhVTR2WhkUwLoK6TXUFQimByasorqoKvFAEWj2VoFFV4pUI09PbrSsCBWTpbs1sWTiqikTI6z0BzTBFcKA1qSLLciiTVLiwa4ppDDK9XD0uBV9tMAparq1BFWFKgCEUNzRBVHFMAYNcdKqTXC9FAwNzFVt36pqHpEuazkqY0azXprguVnrdqI5mjcKjRLUtfuUReKWvrSbZVCd56FtmiPaM0REqaGKfZVKcipQBj3HqguVLtCFVRdDKPRQ9ARquKVCoszVWagq+2kIgNXSuAV2gAyicVfZVbOadCYqkrE2JBaMLE1xlzT+lHFFCbAWUitBNVFWawDSt6wRQkS3YR9ZXf5ys1lNVodhQ7d1VRNRSIWiBc0ZGalu5JpoGsywc02GMVSExiRUNwUkzmgveNJyA0jeob3xWZ9uauXmkpMYdrtFDSKzQ2aZtXKqMhMI6TSl2xWnag1d7AIqm0wRhKMxT2nt0O9Yg01pxipRQUril3SmaG1OgFGQVyBRLlLuangCRUoO6pSsDHuChUZzQQKZojq0ZKoiUdEpMTLIlGKV1BXXakxFQtECUIGmLGaQi9i1WgtnFU09utJUxWiREpGcmmmm7WliozhaL/NCk+RWwqLQNSBVLuqEVn6jVTRdAgd45rgFLu811bhiiyqCNg11WoDtXU6UAjT0yZrUS1is3RPWuj07JYtfsCs2+omtbUCaQezJqasEJ7K4Wpo26C6U9pVi5aqG5VnFEtWZpUMNpr8UydVQRYiqutNREWuXBNFs3BSLpXbKmq4Eau8GhkUujEV37ehAWuClmFHLzQrgokgTAbaldqVI7MFhVFGasxqCg0RdKMtCWrTUiDK1WoKUQ4oAttp/SoBWeHpq3dpoTNW3zinjxWRYv5p65qBFVuM2mI6y7BpM6g1NS0mhJk0h1gI10moqk05YsjbVNkER3FFAKsldW3Rbo8xqK1CoA+m0O90RjAuSFYDdBgxIHSYnsJoN3Ssh2sAD2kEj3jintNu+zdGJUOFKscAncMbuACO+MVT+YS5deGUtMnaQQcCSPnWam3Pb0buCUNyK6RGLBQJJIAHckwBWu9t0ZkZTuUw3GIyTPaKN4JpPNv6zCehjzP8hx6z2ovjupG/iBMPxJaFgE/3bckegrOeuoycV0XDx3KKb7Emu1Yo0SRtH+WPxpR/EQvwbVH92Z9p5rP1PicgCZ9T92Kwl5U39K/03h4cV9b/AMHtQ4jkHMciJnvSyqSMkD5H6VPCtG995mB1xj1JH0p/U2kSVDTByes+lYvydS6vJ0LxtJLCM9tITwQfqCaiHaYIg1Hulj5DH50wqPEP5h6/kw4/YrWHkyi/bP7MdTxIyXrj9A3v0sb1Hu2QRKz6g8j9R60o6EV3QkpLdFnnzjKD2yRc3M0zZIrNAM05bJArRMloJefFLJJq7moTFS3kQxbWuXFq2maTXLgzVrIVWRaald+zqUUBiG1VWHFMkUJkJ6Vkmao4oq22jJpmgGu3Eo3IHFo5ZtTXblqKa04xRL0UWDM0ioCRTDpVClFiO2XM0b7UkxVLUSK4482KV5CsDDgUm5g0W4WqiLJqrJoct3SFE9ataMsB6infDdILjFGUmVhSOVaRBA69arrtEqOhQjbuKGDMshMkH98etYvVSltNvhbju6EdSYYj1oSma5fMu3uavbTvWqMHyEVRzVLnhzOytaIVwQBOIPQYyZ4jNdvptAI61ayYIDjBB+u07fv/ABNRP6bXJtpNqVPjs201r2WZtR5P6VRBhUk5USckGJMnHvWX4hq1uHcm4mSFDYAGBIHcwJNPeJ6y7qWbeqpbQ7Le05IUeZ3mMHFZdzUsxCJED4mjr/jXHst2uWd+6o5wkI3UIEuwUduTQX1O0SFYjuQY+sYrct6MfEct3OT8u1Wex5frWr0MZZgvJ9qSHvAtSPsG24YmDPT3pC4N8r1BJb3pXQ3GsO29S9tsyuWX1I9JPp7U87KGJtny4Jn/ACGII5rznpyhN2vyelGcZwTTOWLgSAQMde800djSJOY6/ofSkk2McnHMj0yKLpribvLn07/KqabygTSwwjgQSuY59R6UvcQHNa9ywQJAgc8R+FYuoMT2k+wmtvG1tr/HZh5OjujXfQuUAMkxRSYwaSuEnPrHzo+pJD7SMgAEfKvS35o8msEd84od9iDmr2UJYY6/hRdYksB6U7zQ9uLLaZ4q63AWzTbaQqiz1is65ZgmnCVsJxpBsVKDB7VKuyaFhpy+V7/eaolliYr09jwQqoP+QP0IplPBJbGOfnmvN/lRWLOhQZgWtISyjpXfEtPsxFeiTREOMYFF8S8O3mPYn8qheQlJWbSgtp4y0JMCr6i1EmtvTeBMGbseKve8IZlj1+6tX5Ebwzn2YyeWW5XDJMV6Y/w7tHf/AHTdjwBdjMeQVA95qn5MKJ2M8mmkcEE0VLJ3TXs10ShSAJP4Uq3g4OeM1nHy43kNuDBfTGJihaHSkvx7V7DU+HDYFjigLpVRlkAmDCjkwJ/Sm/LUlSHGHskK+FB7Nwl0DIwVlPUFWifSZIj59Kp4lpQXCiJ33HcDA3EA4HWdwmO3rSviR1BIS79mHjaFthgqDEDJlm9cc13U3CoCGd4g7iZbdHIPTms6blus7qShtMhNOxcCMEkj1E06NMWeAOBH3TTnh2otu4W8djgGCfgfnM/0melb6+Gop3h12kTJIwYq5eTWGcnwu6oxf+ml1tGIWD8yWNU1nh03LcdXUHsBuA+lbeu11pEUJLbAOPh3Z6nmvN3rzuSSfi5ByFBx0wBWK8h3aOteO2s4J4x4nZzprB+0YPslTIVVMM9xuFAgD51V9OiIoU7yBnbkk+wpHTeEKGO22oB5AxMcSPStNrUDGB7x06CI+tVLXSfoUtByXs8FbVzHDexEH2rqPJ2qhJJ6kD9jFLOT09+hq4ufZo9wkyEKgR/U/EAiZAB/9qT1dVrkcfH0U+Auq1aJ8RAxkqPuz+/SsLVl2M20cKczJ83qSB+dM+E+H7m33SXbnbOM5iKc17lSSCe0dFxwPWpc6lSyzRR9fsjB1H2yqwlRuHqSP0r0H8KOrruaNykg8c9wKyXEsCe/QU5pLgN52EIYBgHBxE/hVPMaJTp2er8U1YCBZ/pHzMfrXk1fe+w9Z+XXNaN22zpO7cZPsAOPvoR0C2klpLHt06fOsYpRwayzkqdD5ZGSG4GZIGD9xpZkZ7k81fwR2S8qkeVyVInndxHrMV7JfC1DiFnOBEnPeuheSo4Z52rpNSwsMxl8PPlxH/FB1/hzCGHtXpn0r7Z2nE4I7VP5ViFBWRBLHnJ4rNeVJOwcbVUYuoyiTzisu4ksR9frXqL2kJQEriYz+lAfw9AshTI+KP6pOIrSHmKKyROF9GTasmB5ZqVuBE6qRXKj+avuHxjlkGB++esVa7adSSII556RSFq+dqzG4nI6FSTmfQVfVtDgF8bZwcE5/wBVwySRrJx24Y+unIgtiefoSPuoKIGeNw6bvmMVX+bJVp6bOcny0hbvf/oWztYDA7z+EihNEuSdGzZsQAR8IGR7dqMmm25MYGR6H86zFusoZgTt8yxE9v1o6apjKkZxPzWnujWSk4hjY+GSIzx2B4nvVn0+5gFwMHPUY6Umlw7wDLIGM4gCR/uivc3EMCRnHcYiM9KE1QpbekMJ5ckCTAkceoqlpkKtOTMe2SQaXE5D9MDmCOQR9QKVR2wT8xHTkyaSkkO4mowV94bAUcfT9a8Lc/iqw10wt63/AEKChlhEhv8AENzHNewfUGGIAO4cenT2NBtrvInyk4MiSpggwe9a6evCN2rBSjuwYOh8P1F5vtGP2a8LvxtBzhOSfUxSWv8AC7lpz9qzMDBS5/S4Yf8Ayem09q9p9geADA++RjmhvrQ4iAdp2wRgiMyPlVLyH0V8i7PI/ZIfKQDEHPb0qXdBGUJA7HOf3+Naet8HJabRyRlRO3np2/fFZjl7cbkcCe25f/bir+SMkbQlF8M09NoSqS/rj1P59KQ1Bliq4xk9BjJI6c16Bbu9FI4gGPz+teZ1l4AMfUhh/V29utY6a3NnS3SyHs31GAZ9iDJ/7u/P7xVL+qHQSQf31pKxpZgg4AliO0Kw9j516dfSqI53emeD07+tbfGuUZLVGtOhcgATJ6xjr91KeJP50UZUncT3UYT6nPyFaNvW27IJdwo2sRPZlJYY5wIisSxqmd3dhyQFAB+D+kGq01Jtt8dBKSSrs0vCTsaSJpfxBtzkgCBwI/SnrerCOiMjIHEDcR8R7Y701/KKs7lJgExJmY5IHSpqpbmS5+tGFptKXdEj4jnuF61ofxF4daS4AhKPAnsCRjFaf8NaUNdd8YGwCep60r/EVkG6ykQxQFT/ANshh9FP0oep7URuW6jnhRZbS7uSzD6EzilvGNSSQi5NP6Z1e2jJwrsGBxBwTP1pbUlC+xRKwxJGDKiZn2BrKT9zqVKBk3tRtiD5lg47g9K+iaPWBlS6IhwCPbJYfIz9K+eaPwx7r7UG4/1tnYOMT39K+g+H6VUVLaAQN4Ucjgkn3JJNGq6SS5ObVn12OWXdhB9c8c8UGxqCZJxA/IYowIhQGG7es9gBA47S1Zt0DzjcDtKiRw3f9KycnRjLUaQTU6oqAp5yRHcjFLPq9gZzwwkDsRGBQ1Qs4DZDSQRj4YwflFGbQbmX+0Ge4zUu27Mt0m2yC6DBKvMCcelSndk8uPlNSpp/g0tlL2lthBHXaSfbt2H+6Dc09tirAnAAxEbiPv6Gs6zYLyhaAQYMxBzkzM/7o+hRkSGYwjDJIPEj78fpWtWrM925cD76NgSTtAwDJJJ7x6fpXNNpV2jvEHoQDDTiuB5ZCz4DAeYx/bicSCGqqarLK/xKTIU9Ex94YfShqheu4s8zzECQAcSIXzD1BoxsLhpIkDPz79JApD7Flgwck+bcAQoyDGcR9Y4pzUXVU7c5XI6gFAYnscj5mp27lbKilm0RHhgOkyRmDnbyflRbV1SUIBgDHA3QDz6wfuoZs+V03SPLDDBEPIx7FKpZO5QpG1wdwkgjBO8T15J+ZqlF8FtUWsPyGkgtj6zzRL1pMCY8xyZOBBj6CKzr1xkfBVkJnqNpkggRz06UbTXlZzuGByd3JO6CMc4H7FRtszUsUaty2uQODgwYAzH3muLaRcN0Hf8AuMSO5rNv3jLKoAJYFhnrBAzjE+1Wcx3CwuB/duO2DHcj6UNU+BqS4rgNq5AENIOcckGYiTjgCiWEVkkjJxwAZXv8m+4UrqViGJwZBJznhVxzkg/nRraxkgKJJg8CMQIOM/jVJJIOW2dDDZBhTPK4jgfr91VTUgJPB37WDCAQFDdfQNz7VTTeYkNgAy26coJJIng/6qmvG1goIiQ6xzMRHzkzEQCPehRxYraVoO5QEBVZRzERjmR6TXn/ABTw9LilhwXADDEhpy3bicdx3r0m8FLbZ2glS8ER5SV9uAPeu6rThp3dRxOG2FgZ9gSfeO1aR9XZtGcpWmzyNvSOsIhZmYszLEE7dwwOg8y/QUXw/wDhwKkXLgCufLtXzKszIY95GAOhr0yaZYO45hzAJ3QQGyT/AFEc+po76ZSoDAwFxJn4MBT0mae+VOhXJ4RhXP4d0/kDbmO2AWjjuIAhjg4+maIvhNuwTsQAjifMT7s2aLqHVSstwqnj4QJJiMxAX1rT0mnVxkCQJiZ5YHnvj8alynL1IVtsxfE/DbepXaTtKt5HHIOcjPTE+30DpFuAOLgl0aFaB5xPxYyDAz0+kVreI2woKqSo3kCMjLKRnpkrQnSSYDSFktgAwMLPzApXJLaUpuLpAdJowHcKMFz9CVYEYwYYDmeexrnjWnVwHA81s7gIyVxv+6T/AONP2V27GZpIVJM5Zp25QdSCKOUG2DEEGMSY4I6+ooat2VFZPLaXS7XvIVLLuQp/TJcDd9AD9RQf+mvvRVQjcyqYz5XBE/QGvS/aTna4O2QdokMpC8mZMGR6H0oTqJWSQQBLAQN0kCJGBI6dxTbaDfKKsNoNILKKiAAF3JOJbAlvcyfaKAdyOsTiFDGTBIYmAOZyIOJNP6l1YAhtsONvTksT7yBx6CkGSFMyx3pJMjiGVp+nFQk2tzIkpSyEsuSCYHeTgyG5wOZn6Vm39MqPDbmKgZkgwxWeMnHSm7cxJfzAuhHTzu3P1/GjeJbWmQACSN3GAVBBzHSJ9Tikk+uSJRe22ZTuoaYiQeSJAPJ+q9OlOJeOxRJBxzg9oPbGaW/ld7bQBIkrkQVA57iZJ/5qovKqqXUgzv4nrx68fcKFG8rkyi2kF2MeC8dMf7qUceIAcswycZEAmR91SntRdL7i+lu7o6Akgns0QopgqoQCfMVZmJJPmD4MAyeogVkWizOBmAQY4GDGe+KfvBtwzPmYAcActArR0iov14CPcDW1YgmYETwFMcR7fQ0TR5OxiCSGIjBkgYHfiqOgCDac9e0diPnQNsEPJ7A9ecik0RJtOxzcZWT8JLRz5TMSZkx+dW1JkzuyUQoSAcAEEnv0z60jvlwOsc+/Io1zSsu0iS0EZk45/KpUrRabawFF9lU7hPlZCR1DJCn0g/hQtPqgYcHbtnJA7ZHc5FcQeUMxmSMHpBkce1LvYVmM4I4xEjPlxTTSrJG52PIRuVGQAOqsvIaTjcSBnqPl6CmLltQAi5IG0xM8DJ95E0urP5N3AA46Hg/cBR9TZJO8GD+Md/WnJ5pGke8CzOVkkN5CF3AHIBEYb0YGrX9VnyZA2yTg+UbScDBiau9ghUgmCDIwefw4rgUBdhXG6Z/HNRNraZyb4Re24VWGSGPBjJM8YiesDtTF5N6yGHExgyDM46GYqt2zKwI4EiJ7VZV2D/GIOM/X0pwakslxcuKwAS6yqA+1WAIJUSIxnPzo1weSTPcRIknJHP7ig2Le8Hr/AMiis+Qh7e1DaWC03toY0uq+0TPI8jYkb1G5WIEDImTxINLLrQYJUEg8A4yyls/Nq7Y8sCI80n8RQzaRXLAZYk+knmic7rA1aRfT3GLtsIEsok53AgYPY+WuanUtvJgQN0gAlj8Uewn8aAd4IaMA8e1dZWZdwmf0xmqvBDk27QvrWl12xPkPXjpMehH0rY01wrHqsGO2Z/OstLB5J/YprSX/ACAGdyyJ9+PxqYuv6FBu7fYRj5yDiNoJ9IADGO8A0lqUIbzdYJIJ7zGO8j6VoXFZiTtHA9sCKDdLHJAxS4bY5QbViGo1u1YBhhwYIE9NxHcAYp/TXwDBzKeXGTIbEScfpWeoyZ9YPQ/Lr/umNMYxHTEdO49Kp4yRFyTDvbyrSw2g7gZkq4HPbKilF1ECVkkkg9QvUSRycE+vypovj14MnpWeIEgmFYfkOtCfZWpbGbOoZXmDBieIIxPPpJrl2/5BKljO0CYB52Z9PzoVx1gYmOPSMCKHqCOZz+M8/jQrqhbmlSZdLbkkGJMMAJxkN8/eoylhs48zNkzuAJJx93pFW0RBaQx4iOkxFCK+ZhJOZ9Of9n61Ne1ibbVnTcI3uJUBDBwSBBBInkxtpHTWVcAMXBwJyGk5BB7fFWkiiMz1n5kUs2m9/wBc/hEU3KkS4N0U/kz/AJ9veMT8+fnUrv8ANEYg496lPb+CaYRLIVd8+9dW9iAJAzQ4OyOaPobiER160nFpWdsIxlSKaPUElsYHIruqeYjjtTG1UJjrSd+/HApLnApqMU0y+mSWPfpWpfaVjqKyNNfE+tOam9MZpVLcTp0k0gVtQRnFHezkOKVRxu701/NqIWqqxRgjREFQdvFDA5B60LW6vYmKU8O10zOapRtWaOST2mvprQXE0HUEZ65kUG48eYmo97A2iahxxQSqqL2XJ4rh1G4bYqti8JI4Nd+zPNEY1hCjGlYe3CLC80g7lmH+PPyq1y+FcEcRQFugkx1NPayJai7HBqlZoI/5rhsljPEGlmBB44p61d+8ChI3ik42wBLAGr2dQCAo5olziKUv24IPFU1aM3UXaGNRYPlPrS1tG+09KZS7gA5qt3kEHrUlVF5GftiFaaElzesjml9Q2IJ5qulO0YPWlTFu9qfAa0YaDFEa2rfCue9UvkAqepxR0bZn506vkIpW0xXV2BHMd65Y0gjIkClPFL7FpHBo1nVMUzVKLozlKLk00Fv2EKyOaztLZ8538Ud9UQMUtqW3LPWhJ3RDlF5rgfFtNpKGqM6rMGSfxrK07xgUVEmjalyL5L6NKyN05xHFCRsiaHpb0Fh1pfV3YE0qTKulZoz6CpWUuuqUf0VuJZ1XljvVdMcY5qVK1ZOm3aHnEgE9Kqqg1KlQXqAE+Iiq3LmY7VKlaUjHs6nOOtQkBiTUqUuy0/U1BeD247VnaYbSTUqUl2XLpjwu7hmhve2mBXalSOXASyZM9aff4Ymu1KS5NI/SZqgGZodtIapUqujnaVjFxjx3o9kDipUpLg6I/SEAB69amujaJqVKTD/kR0Imc0S0CX5wK7UpPkiC4C3bU5oBhV9alSqZU+Do1AMGh6q6ZGcVKlCMLdHNSAVBpex8UHg1KlHQ6W4tqE2tPQ0K624QKlSjsTSTF9PYruQ3OOKlSmwjFUhnTMociOlV11vylqlSpXJpNLaJJBFdqVKsD//Z"
    },
    {
      nick: "Spermious Sam",
      password: 'sam',
      name: "Spamuel Codytech",
      age: 22,
      skills: "Top messenger spammer a ignorer",
      description: "webíky a bložísky",
      profilePic: "https://cdn.rohlik.cz/uploads/Jana/mozarella.jpg"
    },
    {
      nick: "Test",
      password: 'test',
      name: "Jan Novák",
      age: 32,
      skills: "Js, HTML apod.",
      description: "webíky a bložísky",
      profilePic: "https://c4.wallpaperflare.com/wallpaper/302/656/898/ship-ocean-battle-atlantic-ocean-clouds-wallpaper-preview.jpg"
    }
    ];

  currentUser: any;

  init(): void {
    http.get('portfolio.cz/users').subscribe({
      next: data => {
        this.users = data;
      },
      error: error => {
        console.error('nepodařilo se získat array uživatelů, zkouším znova', error);
        this.init();
      }
    })
  }

  getUsers(): Observable<UserData[]> {
    return of(this.users);
  }

  registerUser(user: UserData): Observable<void> {
    this.users.push(user);
    http.post<any>('portfolio.cz/users=?'+user).subscribe(     //todo: přidat platnou ip serveru
      data => {});                                             //todo: otestovat (vítek má rozbitej wildfly)
  return of()
  }

  isValid(nick1, password1): string {
    for (const user of this.users) {
      if (user.nick == nick1) {
        if (password1 == user.password) {
          return 'true';
        } else {
          return 'false';
        }
      }
    }
    return 'Invalid name or password';
  }
}

