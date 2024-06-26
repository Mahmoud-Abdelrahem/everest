import { Container, Heading, Section, Flex, Desc, Fig, Img, Content, Details } from "./PortfolioStyle"
import NetworkImg from '../../assets/images/client1.svg'

const Portfolio = () => {
    return (
        <Section>
            <Heading>من يستفيد من خدمات الشركة</Heading>
            <Container>
                <Flex>
                    <Fig>
                        <Img src={NetworkImg} alt='our network' />
                    </Fig>
                    <Desc>
                        <Content> تعتبر الاستراتيجيات الرقمية اليوم أحد أهم عوامل نجاح الأعمال، حيث أصبحت وسائل التواصل الاجتماعي والتسويق عبر الإنترنت لا غنى عنها لتحقيق النمو والوصول إلى الجمهور المستهدف. في هذا السياق، تقدم شركة إيفرست للتسويق خدمات متخصصة تهدف إلى تعزيز العلامة التجارية وزيادة الوعي بالعلامة التجارية، وتحقيق نتائج إيجابية على المدى الطويل. في هذه المقالة، سنلقي نظرة على كيفية الاستفادة القصوى من خدمات شركة إيفرست للتسويق. </Content>
                        <Content> تتميز شركة إيفرست بتقديم استراتيجيات مخصصة تتناسب مع احتياجات كل عميل. يتم التركيز على فهم عميق للعلامة التجارية والسوق المستهدف، مما يسمح بتطوير خطط تسويقية فريدة تحقق أهداف العميل بدقة.</Content>
                    </Desc>
                </Flex>
                <Details>
                    <p className="title"><strong> : تحسين الوجود على وسائل التواصل الاجتماعي  &bull;</strong></p>
                    <Content> تلعب وسائل التواصل الاجتماعي دوراً حيوياً في بناء العلاقات مع الجمهور وزيادة الوعي بالعلامة التجارية. تقدم شركة إيفرست للتسويق خدمات تحسين الوجود على منصات التواصل الاجتماعي مثل فيسبوك، تويتر، وإنستجرام، من خلال إدارة الحملات الإعلانية وإنشاء محتوى جذاب يجذب الجمهور المستهدف.</Content>
                    <p className="title "><strong>: تحسين محركات البحث (SEO)  &bull;</strong></p>
                    <Content>تعتبر محركات البحث أحد أهم وسائل العثور على المعلومات عبر الإنترنت، وبالتالي يجب أن تكون استراتيجية SEO جزءاً أساسياً من خطة التسويق الرقمي. تقدم شركة إيفرست للتسويق خدمات SEO متقدمة تهدف إلى تحسين ترتيب موقع العميل في نتائج محركات البحث وزيادة حركة المرور المستهدفة.</Content>
                    <p className="title"><strong>: تحليل البيانات وتقارير متعمقة &bull;</strong></p>
                    <Content>توفر شركة إيفرست للتسويق تقارير دورية شاملة تحتوي على تحليلات متعمقة لأداء حملات التسويق الرقمي. يتم استخدام هذه التقارير لتقديم توجيهات وتحسينات مستمرة لتحسين أداء الحملات وتحقيق أقصى عائد على الاستثمار.</Content>
                </Details>
            </Container>
        </Section>
    )
}

export default Portfolio