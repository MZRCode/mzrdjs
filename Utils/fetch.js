const axios = require('axios');

module.exports = {
    fetchUser: async function (userId) {
        try {
            const response = await axios.get(`https://api.unitybot.net/v1/users/${userId}`);
            const data = response.data;

            if (data && data.success && data.public && data.public.data) {
                const transformedData = {
                    success: data.success,
                    data: {
                        id: data.public.data.id,
                        username: data.public.data.username,
                        avatar: data.public.data.avatar,
                        discriminator: data.public.data.discriminator,
                        publicFlags: data.public.data.public_flags,
                        premiumType: data.public.data.premium_type,
                        flags: data.public.data.flags,
                        banner: data.public.data.banner,
                        accentColor: data.public.data.accentColor,
                        nickname: data.public.data.nickname,
                        tag: data.public.data.tag,
                        createdAt: data.public.data.createdAt,
                        createdTimestamp: new Date(data.public.data.createdTimestamp).toISOString(),
                        avatarURL: data.public.data.avatarLink,
                        bannerURL: data.public.data.bannerLink,
                        description: 'Unity my best bot!',
                    }
                };

                return transformedData.data;
            } else {
                throw new Error('Invalid response structure');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw new Error(error.message || 'Error fetching user data');
        }
    },
};