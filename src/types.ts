export interface ICard { 
    id: number;
    date: string;
    modified: string;
    slug: string;
    link: number;
    title: {
        rendered: string;
    };
    _embedded: {
        author: [{
            name: string;
            link: string;
        }];
        "wp:term" : [
            [{
                name: string;
                link: string;
            }],
            [{
                name: string;
            }]
        ];
    };
    content: boolean;
    featured_media: string;
    excerpt: string;
    img: string;
}