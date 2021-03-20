'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'vietnguyene@gmail.com',
          name: 'Nguyễn Văn Việt',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'thuynguyenhihi@gmail.com',
          name: 'Nguyen Thuy',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'cungthinguyen@gmail.com',
          name: '',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'clownKing@gmail.com',
          name: 'Oach Tho',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'vietnguyene@gmail.com',
          name: 'Nguyen Viet',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'thoqt@gmail.com',
          name: 'Quan Tho',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'duyntb@gmail.com',
          name: 'Nguyen Duy',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'chauvtn@gmail.com',
          name: 'Vo Chau',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'thuannlg@gmail.com',
          name: 'Ngo Le',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'cuongnd@gmail.com',
          name: 'Nguyen Dang',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'thinhdq@gmail.com',
          name: 'Dinh Thinh',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'duynb@gmail.com',
          name: 'Duy Tran',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'duyasdcnlszdf@gmail.com',
          name: 'Momo Nguyen',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { 
          email: 'minathon@gmail.com',
          name: 'Minathon Tran',
          password: 'blablabla',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Pictures',
      [
        {
          url: 'https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/T8cy0-640W8sartvA9TWmv08NbGPFxsVvf8gFtBDE08/1577112797/public/styles/600x400/public/media/int_files/elephant_in_tanzania.jpg?h=f507d761&itok=Ei8OXcGi',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://www.cambridgema.gov/-/media/Images/sharedphotos/departmentphotos/animal.jpg?mw=1920',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://thumbs-prod.si-cdn.com/fN0E4-35miW4Z_iB6DiBhdgSpLQ=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/21/d5/21d52f51-bb0a-457f-8669-4afd346e85a8/brjx5m.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://awionline.org/sites/default/files/styles/homepage_header_rotator/public/slide/image/bcpsa.jpg?itok=RlPsdpoT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://i.pinimg.com/originals/37/8d/5a/378d5aaabaac0e7328bb93050c1ef88f.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/83D7/production/_111515733_gettyimages-1208779325.jpg',
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Userpictures',
      [
        {
          userId: 1,
          pictureId: 1,
        },
        {
          userId: 2,
          pictureId: 2,
        },
        {
          userId: 3,
          pictureId: 3,
        },
        {
          userId: 4,
          pictureId: 4,
        },
        {
          userId: 5,
          pictureId: 5,
        },
        {
          userId: 6,
          pictureId: 6,
        },
        {
          userId: 7,
          pictureId: 7,
        },
        {
          userId: 8,
          pictureId: 1,
        },
        {
          userId: 9,
          pictureId: 1,
        },
        {
          userId: 10,
          pictureId: 2,
        },
        {
          userId: 12,
          pictureId: 2,
        },
      ],
      {},
    );
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
