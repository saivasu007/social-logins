var ids = {
  facebook: {
    clientID: '959527280828650',
    clientSecret: '954e690c922e8eed37984645ebe7aec9',
    callbackURL: 'http://localhost:1337'
  },
  twitter: {
    consumerKey: 'hNA3YSFcwAndLOlFZyb8D52xh',
    consumerSecret: '1o9UZ7M5sV4Uz9Z05gnq1jXygW1mQU4V0ZTRO9asRd1bBfLuT7',
    callbackURL: "http://127.0.0.1:1337/auth/twitter/callback"
  },
  github: {
    clientID: '3f26b76bfa52ef4e39db',
    clientSecret: '28b74d5676b3408fc791d234b58682659279e54b',
    callbackURL: "http://127.0.0.1:1337/auth/github/callback"
  },
  google: {
    clientID: '989088271842-2u16eo2sboegvsec287jnhtmcsl1r7nn.apps.googleusercontent.com ',
    clientSecret: 'KVkGD4EyN1fntLf8wVJvr3BN',
   returnURL: 'http://127.0.0.1:1337/auth/google/callback'
  },
  instagram: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://127.0.0.1:1337/auth/instagram/callback'
  },
   linkedin: {
    consumerKey: '7515ix697gi6oz',
    consumerSecret: 'zPbAKreoQuQg3U3H',
    callbackURL: 'http://127.0.0.1:1337/auth/linkedin/callback',
    scope: ['r_emailaddress', 'r_basicprofile']
  }

};

module.exports = ids;
