import type { StudioDocument } from './types'

export const sampleDocument: StudioDocument = {
  title: '雾港来信',
  subtitle: '三幕广播剧 · 制作草稿',
  targetDuration: 540,
  characters: [
    { id: 'char-lin', name: '林夏', voiceActor: '周岚', color: '#73daca' },
    { id: 'char-gu', name: '顾闻', voiceActor: '陈默', color: '#bb9af7' },
    { id: 'char-landlord', name: '房东', voiceActor: '周岚', color: '#ff9e64' }
  ],
  soundEffects: [
    { id: 'fx-rain', name: '港区夜雨', duration: 8, source: 'SFX/RAIN_NIGHT_03.wav', note: '远雨，低频' },
    { id: 'fx-bell', name: '旧式电话铃', duration: 3.5, source: 'SFX/BELL_OLD_02.wav', note: '两短一长' },
    { id: 'fx-door', name: '木门合拢', duration: 2.2, source: 'SFX/DOOR_WOOD_11.wav', note: '带门闩声' },
    { id: 'fx-steps', name: '码头脚步', duration: 4.5, source: 'SFX/STEPS_DOCK_01.wav', note: '潮湿石地' }
  ],
  scenes: [
    {
      id: 'scene-1', code: 'S01', title: '雨夜来客', location: '旧港公寓 302', timeOfDay: '深夜', transition: '冷开场 · 雨声渐入', durationLimit: 150,
      cues: [
        { id: 'cue-1-1', kind: 'sfx', text: '雨点落在铁皮窗檐上', emotion: '', rate: 1, soundEffectId: 'fx-rain', transition: '', manualDuration: 8 },
        { id: 'cue-1-2', kind: 'dialogue', characterId: 'char-lin', text: '顾闻？你怎么会在这个时间回来。', emotion: '警觉 / 压低音量', rate: 0.9, transition: '' },
        { id: 'cue-1-3', kind: 'dialogue', characterId: 'char-gu', text: '船晚点了。楼下有人说，这几天一直有人在找你。', emotion: '疲惫 / 克制', rate: 0.95 as 1, transition: '' },
        { id: 'cue-1-4', kind: 'sfx', text: '远处电话铃穿过走廊', emotion: '', rate: 1, soundEffectId: 'fx-bell', transition: '', manualDuration: 3.5 },
        { id: 'cue-1-5', kind: 'dialogue', characterId: 'char-landlord', text: '小林，电话！对方不肯留名字。', emotion: '急促 / 隔门', rate: 1.1, transition: '' },
        { id: 'cue-1-6', kind: 'transition', text: '电话声切黑', emotion: '', rate: 1, transition: '十字淡出', manualDuration: 4 }
      ]
    },
    {
      id: 'scene-2', code: 'S02', title: '未接来电', location: '电话亭与码头', timeOfDay: '凌晨', transition: '平行剪辑 · 交叉叠化', durationLimit: 125,
      cues: [
        { id: 'cue-2-1', kind: 'sfx', text: '码头潮水与脚步靠近', emotion: '', rate: 1, soundEffectId: 'fx-steps', transition: '', manualDuration: 6 },
        { id: 'cue-2-2', kind: 'dialogue', characterId: 'char-gu', text: '别回头。把信放在第三个电话亭里。', emotion: '冷峻 / 电话滤波', rate: 0.9, transition: '' },
        { id: 'cue-2-3', kind: 'dialogue', characterId: 'char-lin', text: '那封没有署名的信，是你寄的？', emotion: '震动 / 强作镇定', rate: 0.9, transition: '' },
        { id: 'cue-2-4', kind: 'sfx', text: '雨幕中未登记的环境声', emotion: '', rate: 1, soundEffectId: 'fx-missing-siren', transition: '', manualDuration: 7 },
        { id: 'cue-2-5', kind: 'transition', text: '警报从远处掠过', emotion: '', rate: 1, transition: '声音先入 · 2 秒后画面切黑', manualDuration: 2 }
      ]
    },
    {
      id: 'scene-3', code: 'S03', title: '潮痕', location: '防波堤', timeOfDay: '清晨', transition: '尾声 · 留白', durationLimit: 170,
      cues: [
        { id: 'cue-3-1', kind: 'dialogue', characterId: 'char-lin', text: '信里只有一张旧船票，还有你的名字。', emotion: '疲惫 / 试探', rate: 0.9, transition: '' },
        { id: 'cue-3-2', kind: 'dialogue', characterId: 'char-gu', text: '名字是我写的，船票不是。有人想让我们同时回到这里。', emotion: '克制 / 不安', rate: 0.9, transition: '' },
        { id: 'cue-3-3', kind: 'dialogue', characterId: 'char-landlord', text: '你们要找的人，昨晚已经上船了。', emotion: '犹豫 / 低声', rate: 0.9, transition: '' },
        { id: 'cue-3-4', kind: 'sfx', text: '木门在风里合拢', emotion: '', rate: 1, soundEffectId: 'fx-door', transition: '', manualDuration: 7 },
        { id: 'cue-3-5', kind: 'transition', text: '潮声保留至片尾字幕', emotion: '', rate: 1, transition: '长淡出', manualDuration: 5 }
      ]
    }
  ]
}
