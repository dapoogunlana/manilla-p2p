import {
    WhyChooseIconHighSpeed,
    WhyChooseIconIntuitive,
    WhyChooseIconSecurity,
    WhyChooseIcon24Support,
    WhyChooseIcon24SupportDark,
    WhyChooseIconHighSpeedDark,
    WhyChooseIconIntuitiveDark,
    WhyChooseIconSecurityDark,
} from '../../../../../assets/images';

export const whyChooseList = [
    {
        icon: WhyChooseIconHighSpeed,
        darkIcon: WhyChooseIconHighSpeedDark,
        topic: 'Lightning Speed Transactions',
        text: `
            Manilla’s network is designed to meet surge demand. Our servers can isolate lightweight, virtualized environments 
            and maintain extensive control over usage.
        `,
        flipped: false,
    },
    {
        icon: WhyChooseIconIntuitive,
        darkIcon: WhyChooseIconIntuitiveDark,
        topic: 'Intuitive Interface',
        text: `
            Trading on Manilla is a remarkable experience even for neophytes. Having created multiple infrastructures globally, 
            it was seamless to create an intuitive interface.
        `,
        flipped: true,
    },
    {
        icon: WhyChooseIconSecurity,
        darkIcon: WhyChooseIconSecurityDark,
        topic: 'Advance Security',
        text: `
            To ensure Manilla’s security, we are investing in periodic audits and deploying enterprise grade security shield 
            to protect your assets 24/7
        `,
        flipped: true,
    },
    {
        icon: WhyChooseIcon24Support,
        darkIcon: WhyChooseIcon24SupportDark,
        topic: '24H Support',
        text: `
            With a dedicated and experienced CS team on standby round-the-clock across boards, Manilla is dedicated to 
            ensuring you have seamless transactions.
        `,
        flipped: true,
    },
];