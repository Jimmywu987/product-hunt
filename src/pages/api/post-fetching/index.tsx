import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const arr = [
    {
      "node": {
        "slug": "radaar",
        "name": "RADAAR",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "Not just another scheduling tool",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Social Media Tools"
              }
            },
            {
              "node": {
                "name": "Social media marketing"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/ab60213a-f638-4d9d-a45a-8e76790d1503.gif?auto=format"
        },
        "user": {
          "id": "3117947",
          "name": "Mustafa Ercan Zırh",
          "profileImage": "https://ph-avatars.imgix.net/3117947/862e163b-1766-4f19-b00f-6a23065aa4b6?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Founder & CEO, RADAAR | Hiring 🚀"
        }
      }
    },
    {
      "node": {
        "slug": "tweetshots-by-divbyzero",
        "name": "TweetShots by DivByZero",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "Convert top Tweets into beautiful images ready to be shared",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Marketing"
              }
            },
            {
              "node": {
                "name": "SaaS"
              }
            },
            {
              "node": {
                "name": "Social media marketing"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/206c70ae-d2b6-4496-b1da-76746f2ddefb.png?auto=format"
        },
        "user": {
          "id": "2849",
          "name": "Massimo Chieruzzi",
          "profileImage": "https://ph-avatars.imgix.net/2849/ee5316af-4af0-4aee-97b9-181e5aec7e76?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Co-founder @ Breadcrumbs, AdEspresso"
        }
      }
    },
    {
      "node": {
        "slug": "loopin-with-chrome",
        "name": "Loopin With Chrome",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "Notes, tasks, and meetings on Google Chrome and Meet",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Chrome Extensions"
              }
            },
            {
              "node": {
                "name": "Productivity"
              }
            },
            {
              "node": {
                "name": "Tech"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/5393f461-91c1-47af-85d9-15047e6862f8.gif?auto=format"
        },
        "user": {
          "id": "79",
          "name": "Kevin William David",
          "profileImage": "https://ph-avatars.imgix.net/79/9220d412-8518-4af8-9113-f3f7b91b957c?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Ex Community @AngelList. Top Hunter 🥈"
        }
      }
    },
    {
      "node": {
        "slug": "tome",
        "name": "Tome",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "The storytelling tool for work",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Productivity"
              }
            },
            {
              "node": {
                "name": "SaaS"
              }
            },
            {
              "node": {
                "name": "Tech"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/c4ba2661-97a0-499a-a117-4df4497371c2.png?auto=format"
        },
        "user": {
          "id": "2178331",
          "name": "Reid Hoffman",
          "profileImage": "https://ph-avatars.imgix.net/2178331/original?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": null
        }
      }
    },
    {
      "node": {
        "slug": "unco-2",
        "name": "Unco",
        "createdAt": "2022-03-23T07:01:41Z",
        "tagline": "3D illustration set of 150+ heroes, objects, and animations",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Design Tools"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/a75c4b51-65e9-48cb-8255-bce8c2c47f96.gif?auto=format"
        },
        "user": {
          "id": "1509167",
          "name": "Bakhtiyar Sattarov",
          "profileImage": "https://ph-avatars.imgix.net/1509167/15960705-e1b2-4e63-9f8a-626a45f4131b?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Art Director at Craftwork Design"
        }
      }
    },
    {
      "node": {
        "slug": "vagon-streams",
        "name": "Vagon Streams",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "No-code interactive cloud streaming",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "PC"
              }
            },
            {
              "node": {
                "name": "Video Streaming"
              }
            },
            {
              "node": {
                "name": "No-Code"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/6cdbf92d-ff2b-40b8-ad2e-8b4534fb5f64.gif?auto=format"
        },
        "user": {
          "id": "18280",
          "name": "Chris Messina",
          "profileImage": "https://ph-avatars.imgix.net/18280/472353a8-0dae-4dd4-9cd6-e5cc3e0ce122?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "🏆 #1 Hunter!"
        }
      }
    },
    {
      "node": {
        "slug": "stories-by-pixlr",
        "name": "Stories By Pixlr",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "Experience easy story making with just one tap today",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Developer Tools"
              }
            },
            {
              "node": {
                "name": "Artificial Intelligence"
              }
            },
            {
              "node": {
                "name": "Tech"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/655b191b-9c53-4f82-978a-75d266739550.gif?auto=format"
        },
        "user": {
          "id": "3546491",
          "name": "Sharlyne Simon",
          "profileImage": "https://ph-avatars.imgix.net/3546491/51517909-760a-4c53-9a80-fd3e655dd796?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Works at Inmagine Group"
        }
      }
    },
    {
      "node": {
        "slug": "yess",
        "name": "Yess",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "All-in-one suite for freelancers to automate workflow",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Productivity"
              }
            },
            {
              "node": {
                "name": "Freelance"
              }
            },
            {
              "node": {
                "name": "Tech"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/0f02bfa9-d18e-44c6-b09c-5dc80ab84962.gif?auto=format"
        },
        "user": {
          "id": "79",
          "name": "Kevin William David",
          "profileImage": "https://ph-avatars.imgix.net/79/9220d412-8518-4af8-9113-f3f7b91b957c?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Ex Community @AngelList. Top Hunter 🥈"
        }
      }
    },
    {
      "node": {
        "slug": "monitup",
        "name": "MonitUp",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "Increases your company's efficiency",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Productivity"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/6ec077a0-02fb-49db-b30d-c35447d9e94f.gif?auto=format"
        },
        "user": {
          "id": "3442901",
          "name": "Faruk Durak",
          "profileImage": "https://ph-avatars.imgix.net/3442901/original?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Founder of MonitUp"
        }
      }
    },
    {
      "node": {
        "slug": "scout-labs-site",
        "name": "Scout Labs site",
        "createdAt": "2022-03-23T07:02:00Z",
        "tagline": "Simple 3D experience showing off what we've built",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Virtual Reality"
              }
            },
            {
              "node": {
                "name": "User Experience"
              }
            },
            {
              "node": {
                "name": "Tech"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/24a231cd-8ea0-48a2-8c6f-235ce76b06e1.png?auto=format"
        },
        "user": {
          "id": "1462094",
          "name": "Zack Hargett",
          "profileImage": "https://ph-avatars.imgix.net/1462094/original?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Building Scout"
        }
      }
    },
    {
      "node": {
        "slug": "cypress-test-recorder",
        "name": "Cypress Test Recorder",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "Write cypress tests that adapt to UI changes and more",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Productivity"
              }
            },
            {
              "node": {
                "name": "Developer Tools"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/36cf0170-2518-48c6-8af1-267a259cb8cb.png?auto=format"
        },
        "user": {
          "id": "2350656",
          "name": "Mustafa Bayramoglu",
          "profileImage": "https://ph-avatars.imgix.net/2350656/fc629f3a-f056-40db-bec2-766014f3b2ca?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Founder at PreFlight"
        }
      }
    },
    {
      "node": {
        "slug": "starpad-world",
        "name": "Starpad World",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "Community for web3 creators and builders",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Crypto"
              }
            },
            {
              "node": {
                "name": "Web3"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/f05001f7-a155-4a8e-8a21-f11aef992199.png?auto=format"
        },
        "user": {
          "id": "1396329",
          "name": "Krish Chelikavada",
          "profileImage": "https://ph-avatars.imgix.net/1396329/original?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "I like building and hunting stuff!"
        }
      }
    },
    {
      "node": {
        "slug": "blankly-3",
        "name": "Blankly",
        "createdAt": "2022-03-23T09:01:00Z",
        "tagline": "Build trading models for any asset, brokerage, or exchange",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Open Source"
              }
            },
            {
              "node": {
                "name": "Fintech"
              }
            },
            {
              "node": {
                "name": "Developer Tools"
              }
            },
            {
              "node": {
                "name": "GitHub"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/047c4a82-0ed4-4cc7-b782-e003ccdd797d.gif?auto=format"
        },
        "user": {
          "id": "811781",
          "name": "Will Robbins",
          "profileImage": "https://ph-avatars.imgix.net/811781/eda5a994-7619-496f-9464-91cdc57779dd?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "investing: contrarycap.com"
        }
      }
    },
    {
      "node": {
        "slug": "giftsy",
        "name": "Giftsy",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "An online community marketplace for used clothes",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Fashion"
              }
            },
            {
              "node": {
                "name": "Tech"
              }
            },
            {
              "node": {
                "name": "Cryptocurrency"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/c887014e-43dc-4e1d-bd85-ff68056670c4.png?auto=format"
        },
        "user": {
          "id": "4091330",
          "name": "Cindy Lee",
          "profileImage": "https://ph-avatars.imgix.net/4091330/58559b54-61a9-4079-858c-ee55092eb41e?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "I am a CEO, Founder of Giftsy."
        }
      }
    },
    {
      "node": {
        "slug": "productivity-daily-planner",
        "name": "Productivity Daily Planner",
        "createdAt": "2022-03-23T07:39:21Z",
        "tagline": "Keep track of your time, to-dos, important works, goals",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Productivity"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/9204cb8e-7927-4fc8-abb1-15f1f33249c4.png?auto=format"
        },
        "user": {
          "id": "3398021",
          "name": "Mark",
          "profileImage": "https://ph-avatars.imgix.net/3398021/2bfd5a96-67b7-4b3a-91e1-e9de6aa3ea75?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Building something new"
        }
      }
    },
    {
      "node": {
        "slug": "datatrain",
        "name": "datatrain",
        "createdAt": "2022-03-23T07:01:00Z",
        "tagline": "No-code ML for modern teams",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Marketing"
              }
            },
            {
              "node": {
                "name": "Artificial Intelligence"
              }
            },
            {
              "node": {
                "name": "No-Code"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/a15376f1-d60d-40bd-bb22-274adaa1b5c0.png?auto=format"
        },
        "user": {
          "id": "4114407",
          "name": "Simon Meyer",
          "profileImage": "https://ph-avatars.imgix.net/4114407/ae858bc7-ac7c-464a-9135-a9b67d78b732?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Product Manager"
        }
      }
    },
    {
      "node": {
        "slug": "recmaster-3",
        "name": "RecMaster",
        "createdAt": "2022-03-23T08:31:52Z",
        "tagline": "The easiest screen recorder for Windows and Mac",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Education"
              }
            },
            {
              "node": {
                "name": "Games"
              }
            },
            {
              "node": {
                "name": "Online Learning"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/c4e475d1-a90c-4933-a7a9-6879c42cdd6e.png?auto=format"
        },
        "user": {
          "id": "3662316",
          "name": "Audrey",
          "profileImage": "https://ph-avatars.imgix.net/3662316/original?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "RecoverXData & RecMaster"
        }
      }
    },
    {
      "node": {
        "slug": "not-boring-apps-season-2",
        "name": "(Not Boring) Apps Season 2",
        "createdAt": "2022-03-23T07:29:12Z",
        "tagline": "Stop optimizing life & start living it",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Health & Fitness"
              }
            },
            {
              "node": {
                "name": "Productivity"
              }
            },
            {
              "node": {
                "name": "Design"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/26e2d170-86eb-4f5e-9cba-a89036108f50.png?auto=format"
        },
        "user": {
          "id": "193072",
          "name": "Andy",
          "profileImage": "https://ph-avatars.imgix.net/193072/3d6f98a4-fdf9-4f98-a24b-f65a5d69f330?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "(Not Boring) Designer"
        }
      }
    },
    {
      "node": {
        "slug": "trippy-1",
        "name": "TRIPPY",
        "createdAt": "2022-03-23T08:23:56Z",
        "tagline": "Web3 wallet communication",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Crypto"
              }
            },
            {
              "node": {
                "name": "Web3"
              }
            },
            {
              "node": {
                "name": "Ethereum"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/8f554f6d-a43a-4957-a1ad-cb033fe091a2.png?auto=format"
        },
        "user": {
          "id": "536768",
          "name": "SJ Hong",
          "profileImage": "https://ph-avatars.imgix.net/536768/57d9dbd5-9eb3-4231-9086-4927828c30ca?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "Founder trippy.place"
        }
      }
    },
    {
      "node": {
        "slug": "myfavett",
        "name": "myfaveTT",
        "createdAt": "2022-03-23T07:02:00Z",
        "tagline": "Download all your liked videos from TikTok for safekeeping",
        "topics": {
          "edges": [
            {
              "node": {
                "name": "Chrome Extensions"
              }
            },
            {
              "node": {
                "name": "Social Media Tools"
              }
            },
            {
              "node": {
                "name": "Video"
              }
            }
          ]
        },
        "thumbnail": {
          "url": "https://ph-files.imgix.net/6f080903-50f2-4c55-a4c5-7636261329c2.png?auto=format"
        },
        "user": {
          "id": "4128866",
          "name": "Z Yin",
          "profileImage": "https://ph-avatars.imgix.net/4128866/original?auto=format&fit=crop&crop=faces&w=original&h=original",
          "headline": "On my computer 10x more than my phone."
        }
      }
    }
  ]

export default async function handler(req, res) {
    if (req.method === "GET") {
        const client = new ApolloClient({
            uri: "https://api.producthunt.com/v2/api/graphql",
            cache: new InMemoryCache(),
            headers: {
              "Host": "api.producthunt.com",
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${process.env.NEXT_PUBLIC_PH_ACCESS_TOKEN}`
            }
          });
          try{
            // const {data, error} = await client.query({
            //     query: gql`
            //     query {
            //         posts {
            //           edges {
            //             node {
            //               slug,
            //               name,
            //               createdAt,
            //               tagline,
            //               topics {
            //                 edges {
            //                   node {
            //                     name,
            //                   }
            //                 }
            //               },
            //               thumbnail {
            //                 url
            //               },
            //               user{
            //                 id,
            //                 name,
            //                 profileImage,
            //                 headline
            //                 }
            //             }
            //         }
            //     }
            //     }
            //       `
            // })
            //     if(error){
            //         return res.status(404).json({ posts: []});
            //     }
            let data = { posts:{edges: arr }}
                return res.status(200).json({ posts: data.posts.edges.map(post=>post.node)});
            }catch(error){
                return res.status(500).json({ posts: []});
            }
    
   } 
 }