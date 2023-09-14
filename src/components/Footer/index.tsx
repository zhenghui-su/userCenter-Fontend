import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { PLANET_LINK } from '../../constants/index';
const Footer: React.FC = () => {
    const defaultMessage = '晨晨出品';
    const currentYear = new Date().getFullYear();
    return (
        <DefaultFooter
            copyright={`${currentYear} ${defaultMessage}`}
            links={[
                {
                    key: 'codeNav',
                    title: '晨晨项目',
                    href: { PLANET_LINK },
                    blankTarget: true,
                },
                {
                    key: 'github',
                    title: (
                        <>
                            <GithubOutlined />
                            晨晨 GitHub
                        </>
                    ),
                    href: { PLANET_LINK },
                    blankTarget: true,
                },
                {
                    key: 'planet',
                    title: '知识星球',
                    href: 'https://wx.zsxq.com',
                    blankTarget: true,
                },
            ]}
        />
    );
};
export default Footer;
