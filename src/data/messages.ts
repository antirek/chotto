export const messages = [
  {
    chatId: 1, dialogId: 'dlg_43543555', type: "message.call", direction: 'incoming',
    messageId: '3',
    callDuration: "18 мин", isMissedCall: false, timestamp: '1727027959',
    header: 'Василий',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg', subText: '89829445678',
    transcript: {
      dialog: [
        {
          time: '00:00',
          text: 'привет, Вася',
          position: 'right',
        },
        {
          time: '00:05',
          text: 'привет, Петя',
          position: 'left',
        },
        {
          time: '00:10',
          text: 'как дела?',
          position: 'right',
        },
        {
          time: '00:15',
          text: 'все норм',
          position: 'left',
        },
      ],
    },
  },
  {
    chatId: 1, dialogId: 'dlg_43543555', type: "message.text", text: "зачетный обзор", direction: 'incoming', status: 'read', timestamp: '1727027959', subText: 'test test',
    header: 'Василий',
    messageId: '265765',
    embed: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_43543555', type: "message.text", text: "зачетный обзор", direction: 'incoming', status: 'read', timestamp: '1727027959', subText: 'test test',
    header: 'Василий',
    messageId: '265765',
    embed: {
      type: 'yamusic',
      url: 'https://music.yandex.ru/iframe/track/36812773/4773768',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_43543555', type: "message.text", text: "зачетный обзор", direction: 'incoming', status: 'read', timestamp: '1727027959', subText: 'test test',
    header: 'Василий',
    messageId: '265765',
    embed: {
      type: 'rutube',
      url: 'https://rutube.ru/play/embed/6eb0c597c11c89ad5a5fafa3030d0e53/',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_43543555', type: "message.text", text: "новая реклама", direction: 'outgoing', status: 'read', timestamp: '1727027959', subText: 'test test',
    header: 'Вы',
    messageId: '265766',
    embed: {
      type: 'vkvideo',
      url: 'https://vk.com/video_ext.php?oid=-22822305&id=456241864',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_43543555', type: "message.text", text: "Привет!", direction: 'incoming', status: 'read', timestamp: '1727027959', subText: 'test test',
    header: 'Василий',
    messageId: '2',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 1, dialogId: 'dlg_43543555', type: "message.typing", subText: '89829445678', avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
  },
  {
    chatId: 1, dialogId: 'dlg_43543555', messageId: '3', type: "message.text", text: "Привет! Сообщение с просмотрами",
    direction: 'outgoing', status: 'received', timestamp: '1727027959',
    header: 'Вы',
    views: 1000,
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 1, dialogId: 'dlg_43543555', type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", timestamp: '1727027959',
    alt: "Example Image", direction: 'outgoing',
    header: 'Вы',
    views: 1667, messageId: '4',
    status: 'read', actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }]
  },
    {
    chatId: 1, dialogId: 'dlg_43543555', messageId: 1,
    timestamp: 1731411505,
    type: "message.system", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
    {
    chatId: 1, dialogId: 'dlg_89789879',type: "message.text", text: "Привет! Извини, давно тебе не писал. Как дела?",
    messageId: '5',
    direction: 'outgoing', status: 'received', timestamp: '1727027959',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }
    ],
    reply: {
      messageId: '14',
      type: 'message.text',
      text: 'Привет, что-то давно не пишешь?',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_89789879',type: "message.text", text: "классное фото, тоже таки хочу",
    direction: 'outgoing', status: 'received', timestamp: '1727027959',
    messageId: '6',
    reply: {
      messageId: '15',
      type: 'message.file',
      text: 'мои новые кроссовки',
      filename: 'cross.png',
      url: 'https://placehold.jp/30/336633/ffffff/320x160.png?text=кроссовки',
    },
  },
  {
    chatId: 1,dialogId: 'dlg_89789879', url: 'https://placehold.jp/30/336633/ffffff/320x160.png?text=кроссовки',
    type: "message.image", text: "классное фото, тоже таки хочу",
    messageId: '7',
    direction: 'outgoing', status: 'received', timestamp: '1727027959',
    reply: {
      messageId: '15',
      type: 'message.image',
      text: 'мои новые кроссовки',
      url: 'https://placehold.jp/30/336633/ffffff/320x160.png?text=кроссовки',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_89789879',url: 'https://placehold.jp/30/336633/ffffff/320x160.png?text=кроссовки',
    type: "message.image",
    messageId: '15',
    direction: 'outgoing', status: 'received', timestamp: '1727027859',
    text: 'мои новые кроссовки',
  },
  {
    chatId: 1, dialogId: 'dlg_89789879',type: "message.text", text: "Привет! Извини, давно тебе не писал. Как дела?",
    direction: 'incoming', status: 'received', timestamp: '1727027959',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }
    ],
    messageId: '8',
    reply: {
      messageId: '14',
      type: 'message.text',
      text: 'Привет, что-то давно не пишешь?',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_89789879',type: "message.text",
    direction: 'incoming', status: 'received', timestamp: '1727027759',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }
    ],
    messageId: '14',
    text: 'Привет, что-то давно не пишешь?',
  },
  {
    chatId: 1, dialogId: 'dlg_89789879',type: "message.text", text: "классное фото, тоже таки хочу",
    direction: 'incoming', status: 'received', timestamp: '1727027959',
    messageId: '9',
    reply: {
      messageId: '15',
      type: 'message.image',
      text: 'Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон',
      url: 'https://placehold.jp/30/336633/ffffff/320x160.png?text=кроссовки',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_89789879',url: "https://filebump2.services.mobilon.ru/file/i3UQnryC89WwxtigxSUXWq0ltJBhLfJXp5hT",
    type: "message.file", text: "ответ на видео", filename: "video.mp4",
    direction: 'incoming', status: 'received', timestamp: '1727027959',
    messageId: '10',
    reply: {
      messageId: 'msg_3450349543',
      type: 'message.video',
      text: 'Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон',
      url: "https://filebump2.services.mobilon.ru/file/i3UQnryC89WwxtigxSUXWq0ltJBhLfJXp5hT",
    },
  },
  {
    chatId: 1, dialogId: 'dlg_89789879',type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'incoming', status: 'received', subText: '89829445678', timestamp: '1727027959',
    transcript: {
      text: 'Привет, доехала хорошо, позвони мне завтра',
    },
    messageId: '11',
    actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }],
    reply: {
      messageId: 'msg_3450349543',
      type: 'message.audio',
      text: 'Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон',
      url: "https://filebump2.services.mobilon.ru/file/i3UQnryC89WwxtigxSUXWq0ltJBhLfJXp5hT",
    },
  },
  {
    chatId: 1,dialogId: 'dlg_89789879', type: "message.text", text: "Привет! Сообщение с превью ссылки github.com",
    direction: 'outgoing', status: 'received', timestamp: '1727027959',
    messageId: '12',
    linkPreview: {
      title: 'GitHub · Build and ship software on a single, collaborative platform',
      imageUrl: 'https://filebump2.services.mobilon.ru/file/eMWLDOFaV3htGOMJZUVFcdE6r29TPFnZHofq',
      url: 'https://github.com',
      description: 'Join the world\'s most widely adopted, AI-powered developer platform where millions of developers, ' +
        'businesses, and the largest open source community build software that advances humanity.',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_89789879',type: "message.text", text: "Привет! Сообщение с превью ссылки yandex.ru",
    direction: 'incoming', status: 'received', timestamp: '1727028159',
    messageId: '13',
    linkPreview: {
      title: 'Яндекс',
      imageUrl: 'https://yastatic.net/s3/home-static/_/37/37a02b5dc7a51abac55d8a5b6c865f0e.png',
      url: 'https://yandex.ru',
      description: 'Найдётся всё',
    },
  },
  {
    chatId: 1, dialogId: 'dlg_89789879',type: "message.text", text: "Привет! Сообщение с keyboard",
    direction: 'incoming', status: 'received', timestamp: '1735029659',
    messageId:'149',
    keyboard: [
      {
        key: 'key_1',
        action: null,
        color: null,
        text: 'Все ок',
        order: 1,
      },{
        key: 'key_2',
        text: 'Перезвоню позже',
        action: null,
        color: null,
        order: 2,
      },{
        key: 'key_3',
        text: 'Игнорировать',
        action: 'ignore',
        color: 'rgba(255, 0, 0, 0.15)',
        order: 3,
      },
    ],
  },
//=========================================================================================================================================================================================//
  {
    chatId: 2, type: "message.image", url: "https://filebump2.services.mobilon.ru/file/Oao1XkPt8LKLVdFA8pMcXAQeClMehtdrJVsJ", timestamp: '1727027959',
    alt: "Example Image", direction: 'outgoing',
    header: 'Вы',
    views: 1667, messageId: '4',
    status: 'read', actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 2, type: "message.video", url: "https://filebump2.services.mobilon.ru/file/XgYPv3t1VT1RxoUVPpWvQuyOkpdSCayNgpv1",
    text: "Привет!", direction: 'outgoing', status: 'read', timestamp: '1727027959',
    header: 'Вы',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'fa-edit' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 2, type: "message.video", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'outgoing', status: 'read', timestamp: '1727027959',
    header: 'Вы',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'fa-edit' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 2, type: "message.video", url: "https://filebump2.services.mobilon.ru/file/i3UQnryC89WwxtigxSUXWq0ltJBhLfJXp5hT",
    direction: 'outgoing', status: 'read', timestamp: '1727027959',
    header: 'Вы',
  },
  {
    chatId: 2,
    messageId: 1,
    timestamp: '1731411505',
    type: "message.system", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    chatId: 2, type: "message.file", url: "https://axiomabio.com/pdf/test.pdf", filename: "Документ.pdf", direction: 'incoming',
    status: 'received', timestamp: '1727027959', actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }]
    ,header: 'Мария',
    text: 'Привет!',
  },
  { chatId: 2, header: 'Мария', type: "message.text", text: "Привет!", direction: 'incoming', status: 'read', timestamp: '1727027959' },
  {
    chatId: 2, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'incoming', status: 'received', subText: '89829445678', timestamp: '1727027959',
    transcript: {
      text: 'Привет, доехала хорошо, позвони мне завтра',
    },
    header: 'Мария',
    actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 2, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'outgoing', status: 'received', subText: '89829445678', timestamp: '1727027959',
    header: 'Вы',
    actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 2, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    header: 'Мария',
    text: 'Привет!',
    direction: 'incoming', subText: '89829445678', timestamp: '1726743559',
  },
  {
    chatId: 3, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'incoming', status: 'read', timestamp: '1727027959'
  },
  {
    chatId: 3, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    direction: 'outgoing', timestamp: '1726743559',
  },
  {
    chatId: 4, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    direction: 'incoming', status: 'read', timestamp: '1727027959',
    text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!",
  },
  {
    chatId: 4, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    direction: 'outgoing', status: 'read', timestamp: '1727027959',
    text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!",
    transcript: {
      text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!",
    }
  },
  {
    chatId: 4, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    direction: 'outgoing', timestamp: '1726743559',
  },
  { chatId: 4, type: "message.text", text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!", direction: 'incoming', status: 'read', timestamp: '1727027959' },
  { chatId: 4, type: "message.text", text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!", direction: 'outgoing', status: 'read', timestamp: '1727027958' },
  {
    chatId: 4, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    direction: 'outgoing', timestamp: '1726743549', text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!",
  },
  {
    chatId: 4, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    direction: 'incoming', timestamp: '1726743539', text: "Очень длинное сообщение без пробелов занимающее сразу несколько строк и вызывающее странное поведение окон!",
  },
  {
    chatId: 4, type: "message.video", url: "https://filebump2.services.mobilon.ru/file/i3UQnryC89WwxtigxSUXWq0ltJBhLfJXp5hT",
    direction: 'incoming', status: 'read', timestamp: '1727027959',
    text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!",

  },
  {
    chatId: 4, type: "message.video", url: "https://filebump2.services.mobilon.ru/file/i3UQnryC89WwxtigxSUXWq0ltJBhLfJXp5hT",
    direction: 'outgoing', status: 'read', timestamp: '1727027959',
    text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!",

  },
  {
    chatId: 4, type: "message.file", url: "https://axiomabio.com/pdf/test.pdf", filename: "оченьдлинноеназваниедокумента.pdf", direction: 'outgoing',
    status: 'received', timestamp: '1727027959', actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }],
    text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!",

  },
  {
    chatId: 4, type: "message.file", url: "https://axiomabio.com/pdf/test.pdf", filename: "Документ.pdf", direction: 'incoming',
    status: 'received', timestamp: '1727027959', actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }],
    text: "Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон!",
    keyboard: [
      {
        key: 'key_1',
        text: 'Длинная строка с пробелами и минимальными проблемами при отображении в узком пространстве',
        order: 1,
      },{
        key: 'key_2',
        text: 'Оченьдлинноесообщениебезпробеловзанимающеесразунесколькострокивызывающеестранноеповедениеокон',
        order: 2,
      },
    ],
  },

  /**============================================================================================================ */
  { messageId: 1,
    chatId: 5, type: "message.text", 
    text: "1!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 2,
    chatId: 5, type: "message.text", 
    text: "2!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 3,
    chatId: 5, type: "message.text", 
    text: "3!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 4,
    chatId: 5, type: "message.text", 
    text: "4!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 5,
    chatId: 5, type: "message.text", 
    text: "5!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 6,
    chatId: 5, type: "message.text", 
    text: "6!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 7,
    chatId: 5, type: "message.text", 
    text: "7!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 8,
    chatId: 5, type: "message.text", 
    text: "8!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 9,
    chatId: 5, type: "message.text", 
    text: "9!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 10,
    chatId: 5, type: "message.text", 
    text: "10!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 11,
    chatId: 5, type: "message.text", 
    text: "11!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 12,
    chatId: 5, type: "message.text", 
    text: "12!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 13,
    chatId: 5, type: "message.text", 
    text: "13!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 14,
    chatId: 5, type: "message.text", 
    text: "14!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 15,
    chatId: 5, type: "message.text", 
    text: "15!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 16,
    chatId: 5, type: "message.text", 
    text: "16!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 17,
    chatId: 5, type: "message.text", 
    text: "17!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 18,
    chatId: 5, type: "message.text", 
    text: "18!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 19,
    chatId: 5, type: "message.text", 
    text: "19!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 20,
    chatId: 5, type: "message.text", 
    text: "20!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 21,
    chatId: 5, type: "message.text", 
    text: "21!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 22,
    chatId: 5, type: "message.text", 
    text: "22!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 23,
    chatId: 5, type: "message.text", 
    text: "23!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 24,
    chatId: 5, type: "message.text", 
    text: "24!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 25,
    chatId: 5, type: "message.text", 
    text: "25!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 26,
    chatId: 5, type: "message.text", 
    text: "26!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 27,
    chatId: 5, type: "message.text", 
    text: "27!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 28,
    chatId: 5, type: "message.text", 
    text: "28!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 29,
    chatId: 5, type: "message.text", 
    text: "29!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 30,
    chatId: 5, type: "message.text", 
    text: "30!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 31,
    chatId: 5, type: "message.text", 
    text: "31!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 32,
    chatId: 5, type: "message.text", 
    text: "32!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 34,
    chatId: 5, type: "message.text", 
    text: "34!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 35,
    chatId: 5, type: "message.text", 
    text: "35!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 36,
    chatId: 5, type: "message.text", 
    text: "36!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 37,
    chatId: 5, type: "message.text", 
    text: "37!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 38,
    chatId: 5, type: "message.text", 
    text: "38!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 39,
    chatId: 5, type: "message.text", 
    text: "39!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 40,
    chatId: 5, type: "message.text", 
    text: "40!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 41,
    chatId: 5, type: "message.text", 
    text: "41!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 42,
    chatId: 5, type: "message.text", 
    text: "42!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 43,
    chatId: 5, type: "message.text", 
    text: "43!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 44,
    chatId: 5, type: "message.text", 
    text: "44!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 45,
    chatId: 5, type: "message.text", 
    text: "45!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 46,
    chatId: 5, type: "message.text", 
    text: "46!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 47,
    chatId: 5, type: "message.text", 
    text: "47!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 48,
    chatId: 5, type: "message.text", 
    text: "48!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 49,
    chatId: 5, type: "message.text", 
    text: "49!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 50,
    chatId: 5, type: "message.text", 
    text: "50!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 51,
    chatId: 5, type: "message.text", 
    text: "51!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 52,
    chatId: 5, type: "message.text", 
    text: "52!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 53,
    chatId: 5, type: "message.text", 
    text: "53!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 54,
    chatId: 5, type: "message.text", 
    text: "54!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 55,
    chatId: 5, type: "message.text", 
    text: "55!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 56,
    chatId: 5, type: "message.text", 
    text: "56!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 57,
    chatId: 5, type: "message.text", 
    text: "57!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 58,
    chatId: 5, type: "message.text", 
    text: "58!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 59,
    chatId: 5, type: "message.text", 
    text: "59!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 60,
    chatId: 5, type: "message.text", 
    text: "60!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 61,
    chatId: 5, type: "message.text", 
    text: "61!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 62,
    chatId: 5, type: "message.text", 
    text: "62!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 63,
    chatId: 5, type: "message.text", 
    text: "63!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 64,
    chatId: 5, type: "message.text", 
    text: "64!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 65,
    chatId: 5, type: "message.text", 
    text: "65!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 66,
    chatId: 5, type: "message.text", 
    text: "66!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 67,
    chatId: 5, type: "message.text", 
    text: "67!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 68,
    chatId: 5, type: "message.text", 
    text: "68!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 69,
    chatId: 5, type: "message.text", 
    text: "69!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 70,
    chatId: 5, type: "message.text", 
    text: "70!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 71,
    chatId: 5, type: "message.text", 
    text: "71!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 72,
    chatId: 5, type: "message.text", 
    text: "72!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 73,
    chatId: 5, type: "message.text", 
    text: "73!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 74,
    chatId: 5, type: "message.text", 
    text: "74!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 75,
    chatId: 5, type: "message.text", 
    text: "75!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 76,
    chatId: 5, type: "message.text", 
    text: "76!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 77,
    chatId: 5, type: "message.text", 
    text: "77!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 78,
    chatId: 5, type: "message.text", 
    text: "78!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 79,
    chatId: 5, type: "message.text", 
    text: "79!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 80,
    chatId: 5, type: "message.text", 
    text: "80!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 81,
    chatId: 5, type: "message.text", 
    text: "81!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 82,
    chatId: 5, type: "message.text", 
    text: "82!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 83,
    chatId: 5, type: "message.text", 
    text: "83!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 84,
    chatId: 5, type: "message.text", 
    text: "84!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 85,
    chatId: 5, type: "message.text", 
    text: "85!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 86,
    chatId: 5, type: "message.text", 
    text: "86!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 87,
    chatId: 5, type: "message.text", 
    text: "87!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 88,
    chatId: 5, type: "message.text", 
    text: "88!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 89,
    chatId: 5, type: "message.text", 
    text: "89!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 90,
    chatId: 5, type: "message.text", 
    text: "90!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 91,
    chatId: 5, type: "message.text", 
    text: "91!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 92,
    chatId: 5, type: "message.text", 
    text: "92!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 93,
    chatId: 5, type: "message.text", 
    text: "93!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 94,
    chatId: 5, type: "message.text", 
    text: "94!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 95,
    chatId: 5, type: "message.text", 
    text: "95!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 96,
    chatId: 5, type: "message.text", 
    text: "96!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 97,
    chatId: 5, type: "message.text", 
    text: "97!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 98,
    chatId: 5, type: "message.text", 
    text: "98!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 99,
    chatId: 5, type: "message.text", 
    text: "99!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 100,
    chatId: 5, type: "message.text", 
    text: "100!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 101,
    chatId: 5, type: "message.text", 
    text: "101!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 103,
    chatId: 5, type: "message.text", 
    text: "102!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 103,
    chatId: 5, type: "message.text", 
    text: "103!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 104,
    chatId: 5, type: "message.text", 
    text: "104!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 105,
    chatId: 5, type: "message.text", 
    text: "105!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 106,
    chatId: 5, type: "message.text", 
    text: "106!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 107,
    chatId: 5, type: "message.text", 
    text: "107!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 108,
    chatId: 5, type: "message.text", 
    text: "108!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 109,
    chatId: 5, type: "message.text", 
    text: "109!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 110,
    chatId: 5, type: "message.text", 
    text: "110!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 111,
    chatId: 5, type: "message.text", 
    text: "111!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 112,
    chatId: 5, type: "message.text", 
    text: "112!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 113,
    chatId: 5, type: "message.text", 
    text: "113!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 114,
    chatId: 5, type: "message.text", 
    text: "114!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 115,
    chatId: 5, type: "message.text", 
    text: "115!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 116,
    chatId: 5, type: "message.text", 
    text: "116!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 117,
    chatId: 5, type: "message.text", 
    text: "117!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 118,
    chatId: 5, type: "message.text", 
    text: "118!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 119,
    chatId: 5, type: "message.text", 
    text: "119!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 120,
    chatId: 5, type: "message.text", 
    text: "120!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 121,
    chatId: 5, type: "message.text", 
    text: "121!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 122,
    chatId: 5, type: "message.text", 
    text: "122!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 123,
    chatId: 5, type: "message.text", 
    text: "123!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 124,
    chatId: 5, type: "message.text", 
    text: "124!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 125,
    chatId: 5, type: "message.text", 
    text: "125!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 126,
    chatId: 5, type: "message.text", 
    text: "126!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959' },
    { messageId: 127,
    chatId: 5, type: "message.text", 
    text: "127!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959',
    reply: {
      messageId: 7,
      type: 'message.text',
      text: '7!',
    }, },
    { messageId: 128,
    chatId: 5, type: "message.text", 
    text: "128!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959',
    reply: {
      messageId: 127,
      type: 'message.text',
      text: '127!',
    }, },
    { messageId: 129,
    chatId: 5, type: "message.text", 
    text: "129!", 
    direction: 'incoming', status: 'read', timestamp: '1727027959', 
    reply: {
      messageId: 55,
      type: 'message.text',
      text: '55!',
    },},

];
