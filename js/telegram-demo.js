// Telegram Demo Script
const CHATS = [
  {
    id: 'design',
    name: '🎨 Дизайн',
    avatar: { letter: 'Д', color: 'violet' },
    subtitle: '12 каналов',
    preview: 'Дизайн Кабак: Новый тренд в UI — неоморфизм возвращается...',
    time: '14:32',
    unread: 24,
    messages: [
      { type: 'date', text: 'Сегодня' },
      { from: 'Дизайн Кабак', text: 'Новый тренд в UI — неоморфизм возвращается, но уже в более сдержанной форме. Мягкие тени, минимум градиентов.', time: '12:15', avatar: { letter: 'ДК', color: 'violet' } },
      { from: 'Awdee', text: 'Figma выкатила обновление: Auto Layout стал ещё умнее. Теперь можно задавать min/max width прямо в свойствах.', time: '12:47', avatar: { letter: 'A', color: 'blue' } },
      { from: 'Design & Productivity', text: '5 расширений для Figma, которые сэкономят вам часы работы:\n\n1. Stark — проверка контрастности\n2. Content Reel — генерация контента\n3. Autoflow — стрелки и флоу\n4. Unsplash — фото прямо в макет\n5. Iconify — 100k+ иконок', time: '13:22', avatar: { letter: 'D', color: 'green' } },
      { from: 'Дизайн Кабак', text: 'Вакансия: Senior Product Designer в Яндекс. Удалёнка, от 400к. Кто хочет — пишите в личку.', time: '14:01', avatar: { letter: 'ДК', color: 'violet' } },
      { from: 'UX Notes', text: 'Почему пользователи не читают ваши тексты?\n\nПотому что вы пишете для себя, а не для них. F-паттерн никто не отменял.', time: '14:32', avatar: { letter: 'UX', color: 'orange' } },
    ]
  },
  {
    id: 'ai',
    name: '🤖 AI & ML',
    avatar: { letter: 'AI', color: 'blue' },
    subtitle: '8 каналов',
    preview: 'AI News: OpenAI анонсировала GPT-5...',
    time: '14:28',
    unread: 12,
    messages: [
      { type: 'date', text: 'Сегодня' },
      { from: 'AI News', text: 'OpenAI анонсировала GPT-5. Главное:\n\n• Контекст 1M токенов\n• Мультимодальность из коробки\n• Reasoning на уровне PhD\n• Цена x2 от GPT-4', time: '11:45', avatar: { letter: 'AI', color: 'green' } },
      { from: 'Машинное обучение', text: 'Anthropic выложили исследование по интерпретируемости Claude. Оказывается, модель реально "думает" — есть внутренние цепочки рассуждений.', time: '12:30', avatar: { letter: 'ML', color: 'cyan' } },
      { from: 'Нейросети для всех', text: 'Midjourney v7 — первые примеры. Фотореализм вышел на новый уровень. Руки наконец-то нормальные 🙌', time: '13:15', avatar: { letter: 'Н', color: 'pink' } },
      { from: 'AI News', text: 'Google DeepMind показали AlphaFold 3. Теперь предсказывает не только белки, но и взаимодействие с лекарствами.', time: '14:28', avatar: { letter: 'AI', color: 'green' } },
    ]
  },
  {
    id: 'marketing',
    name: '📈 Маркетинг',
    avatar: { letter: 'М', color: 'orange' },
    subtitle: '15 каналов',
    preview: 'Маркетинг и PR: Кейс: как мы увеличили конверсию...',
    time: '13:55',
    unread: 0,
    messages: [
      { type: 'date', text: 'Сегодня' },
      { from: 'Маркетинг и PR', text: 'Кейс: как мы увеличили конверсию лендинга с 2% до 8%.\n\nСпойлер: убрали 70% текста и добавили видео-демо продукта.', time: '10:20', avatar: { letter: 'PR', color: 'orange' } },
      { from: 'Growth Hacks', text: 'Telegram Ads теперь доступны для всех. Минимальный бюджет — €500. CPM от €2.', time: '11:45', avatar: { letter: 'GH', color: 'green' } },
      { from: 'Контент-маркетинг', text: 'SEO в 2025: Google официально подтвердил — поведенческие факторы важнее ссылок. Время на сайте и глубина просмотра решают.', time: '13:55', avatar: { letter: 'К', color: 'blue' } },
    ]
  },
  {
    id: 'crypto',
    name: '💰 Крипта',
    avatar: { letter: '₿', color: 'orange' },
    subtitle: '6 каналов',
    preview: 'Crypto Daily: BTC пробил $100k...',
    time: '13:40',
    unread: 5,
    messages: [
      { type: 'date', text: 'Сегодня' },
      { from: 'Crypto Daily', text: '🚀 BTC пробил $100k!\n\nИсторический момент. ETF-ы залили $2B за день.', time: '09:30', avatar: { letter: '₿', color: 'orange' } },
      { from: 'DeFi Insights', text: 'Новый L2 от Coinbase показывает TPS 10,000. Комиссии меньше цента. Ethereum киллер? Вряд ли, но интересно.', time: '11:20', avatar: { letter: 'D', color: 'blue' } },
      { from: 'Crypto Daily', text: 'SEC одобрила Ethereum ETF. Цена +15% за час.', time: '13:40', avatar: { letter: '₿', color: 'orange' } },
    ]
  },
  {
    id: 'dev',
    name: '👨‍💻 Разработка',
    avatar: { letter: '<>', color: 'green' },
    subtitle: '10 каналов',
    preview: 'Frontend Daily: React 19 — что нового...',
    time: '12:50',
    unread: 0,
    messages: [
      { type: 'date', text: 'Сегодня' },
      { from: 'Frontend Daily', text: 'React 19 — что нового:\n\n• use() хук для промисов\n• Улучшенный Suspense\n• Автоматический батчинг\n• Новый компилятор', time: '10:15', avatar: { letter: 'FE', color: 'cyan' } },
      { from: 'Backend News', text: 'Bun 2.0 вышел. Теперь полностью совместим с Node.js. Скорость — x3.', time: '11:30', avatar: { letter: 'BE', color: 'green' } },
      { from: 'DevOps Weekly', text: 'Docker Desktop теперь бесплатный для команд до 250 человек. Наконец-то.', time: '12:50', avatar: { letter: 'DO', color: 'blue' } },
    ]
  },
  {
    id: 'news',
    name: '📰 Новости',
    avatar: { letter: 'Н', color: 'red' },
    subtitle: '5 каналов',
    preview: 'Новости IT: Apple представила Vision Pro 2...',
    time: '11:20',
    unread: 3,
    messages: [
      { type: 'date', text: 'Сегодня' },
      { from: 'Новости IT', text: 'Apple представила Vision Pro 2:\n\n• Вес уменьшен на 40%\n• Цена $2,499\n• Батарея 4 часа\n• Совместимость с Mac', time: '10:00', avatar: { letter: 'IT', color: 'red' } },
      { from: 'Tech Insider', text: 'Илон Маск купил ещё одну компанию. На этот раз — производителя чипов для AI.', time: '11:20', avatar: { letter: 'TI', color: 'blue' } },
    ]
  },
];

function renderChatList() {
  const container = document.getElementById('chatList');
  if (!container) return;
  container.innerHTML = CHATS.map(chat => `
    <div class="tg-chat-item" data-chat-id="${chat.id}" onclick="openChat('${chat.id}')">
      <div class="tg-avatar ${chat.avatar.color}">${chat.avatar.letter}</div>
      <div class="tg-chat-info">
        <div class="tg-chat-top">
          <span class="tg-chat-name">${chat.name}</span>
          <span class="tg-chat-time">${chat.time}</span>
        </div>
        <div class="tg-chat-bottom">
          <span class="tg-chat-preview">${chat.preview}</span>
          ${chat.unread ? `<span class="tg-badge">${chat.unread}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function renderMessages(chatId) {
  const chat = CHATS.find(c => c.id === chatId);
  if (!chat) return;
  const container = document.getElementById('messagesInner');
  if (!container) return;
  container.innerHTML = chat.messages.map(msg => {
    if (msg.type === 'date') {
      return `
        <div class="tg-date-separator">
          <span>${msg.text}</span>
        </div>
      `;
    }
    return `
      <div class="tg-message incoming">
        <div class="tg-message-avatar">
          <div class="tg-avatar small ${msg.avatar.color}">${msg.avatar.letter}</div>
        </div>
        <div class="tg-bubble">
          <div class="tg-forwarded">
            <svg class="icon small" viewBox="0 0 24 24"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>
            <span class="tg-channel-name">${msg.from}</span>
          </div>
          <div class="tg-message-text">${msg.text}</div>
          <div class="tg-message-meta">
            <span class="tg-message-time">${msg.time}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
  const messagesArea = document.getElementById('messagesArea');
  if (messagesArea) messagesArea.scrollTop = messagesArea.scrollHeight;
}

let currentChatId = null;

function openChat(chatId) {
  const chat = CHATS.find(c => c.id === chatId);
  if (!chat) return;
  currentChatId = chatId;
  document.querySelectorAll('.tg-chat-item').forEach(el => {
    el.classList.toggle('active', el.dataset.chatId === chatId);
  });
  const headerAvatar = document.getElementById('headerAvatar');
  if (headerAvatar) {
    headerAvatar.className = `tg-avatar small ${chat.avatar.color}`;
    headerAvatar.textContent = chat.avatar.letter;
  }
  document.getElementById('headerTitle').textContent = chat.name;
  document.getElementById('headerSubtitle').textContent = chat.subtitle;
  document.getElementById('chatHeader').style.display = 'flex';
  document.getElementById('messagesArea').style.display = 'flex';
  document.getElementById('inputArea').style.display = 'block';
  renderMessages(chatId);
  document.getElementById('app').classList.add('chat-open');
  setTimeout(() => animateMessagesIn(), 100);
}

function closeChat() {
  document.getElementById('app').classList.remove('chat-open');
  document.getElementById('chatHeader').style.display = 'none';
  document.getElementById('messagesArea').style.display = 'none';
  document.getElementById('inputArea').style.display = 'none';
  document.querySelectorAll('.tg-chat-item').forEach(el => el.classList.remove('active'));
}

function animateMessagesIn() {
  const messagesArea = document.getElementById('messagesArea');
  const items = messagesArea.querySelectorAll('.tg-message, .tg-date-separator');
  items.forEach(item => item.classList.remove('animate-in'));
  messagesArea.scrollTop = 0;
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('animate-in');
      messagesArea.scrollTo({ top: messagesArea.scrollHeight, behavior: 'smooth' });
    }, index * 2000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderChatList();
});
