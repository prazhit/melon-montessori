import big_image from "@assets/img/testimonials/big-1.jpg";
import parent1 from "@assets/img/testimonials/parent1.jpg";
import parent2 from "@assets/img/testimonials/parent2.jpg";
import Image from "next/image";

const testimonial_data = [
    {
        id: 1,
        review: 'I am very greateful to be a part of this school. We have been very impressed by teaching methods of this school and very caring teachers and staff. Good teaching staff and nice environment makes us really happy.',
        author: 'Ramesh Shrestha',
        clrClass: 'theme-bg-6',
        authorImg: parent1,
        delay: '.3s',
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' }
        ]
    },
    {
        id: 2,
        review: 'I liked melon teaching style, melon celebrates every religious program in school, extra activities & Student Educational tour in different places etc.',
        author: 'Achut Khanal',
        clrClass: 'clr-1 theme-bg-7',
        authorImg: parent2,
        delay: '.5s',
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'far fa-star' }
        ]
    }
]

const HomeTwoTestimonial = () => {
    return (
        <section className="bd-testimonial-area-2 pb-120 pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bd-section-title-wrapper z-index-1 p-relative text-center mb-55">
                            <h2 className="bd-section-title mb-0">Parents Says</h2>
                            <p>With the help of teachers and the environment as the third teacher, students<br /> have
                                opportunities to confidently take risks.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="bd-testimonial-thumb-2 wow fadeInLeft p-relative" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <div style={{ position: "relative", width: "100%", paddingBottom: "93.75%", maxWidth: 640, maxHeight: 600 }}>
                                <iframe
                                    src="https://drive.google.com/file/d/1K8-jobc3lK_uT7cpXhEd0y1eitcBzy7o/preview"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        border: 0,
                                        maxWidth: "640px",
                                        maxHeight: "600px"
                                    }}
                                    allow="autoplay"
                                    title="testimonial-video"
                                ></iframe>
                            </div>
                            <div className="panel wow"></div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="bd-testimonial-2-wrap">
                            {testimonial_data.map((item) => (
                                <div className={`bd-testimonial-2 mb-25 wow fadeInUp ${item.clrClass ? item.clrClass : ''}`} data-wow-duration="1s" 
                                data-wow-delay={item.delay} key={item.id}>
                                    <div className="bd-testimonial-rating mb-30">
                                        {item.ratings.map((rating) => (
                                            <a href="#" key={rating.id}><i className={rating.icon}></i></a>
                                        ))}
                                    </div>
                                    <div className="bd-testimonial-content-2 mb-35">
                                        <p>{item.review}</p>
                                    </div>
                                    <div className="bd-testimonial-avatar d-flex align-items-center">
                                        <div className="bd-testimonial-avatar-thumb">
                                            <Image src={item.authorImg} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        </div>
                                        <h6 className="bd-testimonial-avatar-title-2 mb-0">{item.author}</h6>
                                        <div className="bd-testimonial-quote d-none d-sm-block clr-2">
                                            <i className="flaticon-quote"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTwoTestimonial;