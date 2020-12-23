---
model: Page
published: true
layout: flexible
title: Flexible Page - Columns
layout_basic:
  heading: ''
  body_md: ''
layout_flexible:
  blocks:
  - template: component-container
    config:
      margin_bottom: '40'
    title: Container - Simple Column
    blocks:
    - template: component-column
      config:
        margin_bottom: '0'
        text_align: center
        width: ''
      title: Main Column
      blocks:
      - template: component-content
        body_md: |-
          ## Single, full-width column

          Culpa consequat ea do in. Veniam nisi Lorem incididunt minim. Proident non commodo amet Lorem anim. Ex eiusmod mollit pariatur qui.

          Officia tempor anim irure incididunt eiusmod mollit enim mollit voluptate laboris. Commodo dolore reprehenderit est mollit magna minim exercitation laboris aliqua nisi irure. Velit tempor anim pariatur aliqua magna do ullamco ut est irure aute.

          Labore commodo ea aliqua ad non proident nostrud magna dolore id. Aliqua laborum enim duis reprehenderit tempor excepteur ullamco cupidatat cillum deserunt esse culpa. Lorem sint elit quis eiusmod cupidatat nisi ipsum in aute commodo qui. Anim ea mollit non nostrud aliqua. Dolore laboris tempor ullamco consequat laboris sunt.
  - template: component-container
    config:
      margin_bottom: '40'
    title: Container - Small, Centered Column
    blocks:
    - template: component-column
      config:
        width: 1/2
        margin_bottom: '0'
        text_align: ''
      title: Main Column
      blocks:
      - template: component-content
        body_md: |-
          ## Single column, half width

          Culpa consequat ea do in. Veniam nisi Lorem incididunt minim. Proident non commodo amet Lorem anim. Ex eiusmod mollit pariatur qui.

          Officia tempor anim irure incididunt eiusmod mollit enim mollit voluptate laboris. Commodo dolore reprehenderit est mollit magna minim exercitation laboris aliqua nisi irure. Velit tempor anim pariatur aliqua magna do ullamco ut est irure aute.

          Labore commodo ea aliqua ad non proident nostrud magna dolore id. Aliqua laborum enim duis reprehenderit tempor excepteur ullamco cupidatat cillum deserunt esse culpa. Lorem sint elit quis eiusmod cupidatat nisi ipsum in aute commodo qui. Anim ea mollit non nostrud aliqua. Dolore laboris tempor ullamco consequat laboris sunt.
  - template: component-container
    config:
      margin_bottom: '40'
    title: Container - Two Columns
    blocks:
    - template: component-column
      config:
        width: 1/2
        margin_bottom: '0'
        text_align: ''
      title: Left
      blocks:
      - template: component-content
        body_md: |-
          ## Two half-width columns

          Id et labore sint duis incididunt aliqua minim irure. Lorem reprehenderit do dolor laborum labore enim. Qui aliqua ex esse consequat non tempor aliqua. Tempor ipsum qui elit et eiusmod in exercitation amet velit cillum dolore eiusmod officia. Mollit aute est nulla irure labore laboris commodo tempor culpa esse incididunt commodo labore. Est consequat deserunt nostrud qui velit duis nisi minim occaecat.

          Qui occaecat ex exercitation eiusmod anim nostrud. Sit fugiat incididunt aliqua cupidatat ex ullamco aute sit. Dolor aute nisi nulla qui fugiat laborum mollit. Qui in amet dolore Lorem. Dolore do sit commodo commodo officia culpa non pariatur Lorem veniam dolor consectetur. Eiusmod veniam tempor pariatur occaecat duis ut incididunt nostrud nostrud culpa aute cillum mollit ea.
    - template: component-column
      config:
        width: 1/2
        margin_bottom: '0'
        text_align: ''
      title: Right
      blocks:
      - template: component-content
        body_md: |-
          Consectetur in fugiat ad elit adipisicing incididunt irure amet anim veniam nostrud ut pariatur. Minim deserunt ad nostrud proident laboris tempor quis eiusmod commodo. Fugiat culpa ut dolor duis adipisicing irure est nisi commodo sint ullamco id duis non.

          Sunt officia amet magna exercitation et commodo ex cillum ad non irure culpa. Cillum esse tempor reprehenderit ex ipsum. Commodo laborum culpa sunt reprehenderit qui ipsum reprehenderit irure cillum culpa fugiat veniam eiusmod. Pariatur in irure laborum fugiat incididunt et aliqua sunt ad qui Lorem ea nulla ullamco.

          Voluptate dolore labore sit enim irure eiusmod esse dolor. Et Lorem nostrud aliquip quis occaecat est veniam aute aliqua. Ullamco veniam nulla esse sunt. Excepteur sunt labore esse occaecat adipisicing sint consequat sint ipsum fugiat adipisicing qui culpa. Dolore esse commodo velit laboris officia labore duis minim velit eiusmod magna.
  - template: component-container
    config:
      margin_bottom: '40'
    title: Container - Sidebar
    blocks:
    - template: component-column
      config:
        width: 2/3
        margin_bottom: '0'
        text_align: ''
      title: Main
      blocks:
      - template: component-content
        body_md: |-
          ## Main column with sidebar

          Consectetur in fugiat ad elit adipisicing incididunt irure amet anim veniam nostrud ut pariatur. Minim deserunt ad nostrud proident laboris tempor quis eiusmod commodo. Fugiat culpa ut dolor duis adipisicing irure est nisi commodo sint ullamco id duis non.

          Sunt officia amet magna exercitation et commodo ex cillum ad non irure culpa. Cillum esse tempor reprehenderit ex ipsum. Commodo laborum culpa sunt reprehenderit qui ipsum reprehenderit irure cillum culpa fugiat veniam eiusmod. Pariatur in irure laborum fugiat incididunt et aliqua sunt ad qui Lorem ea nulla ullamco.

          Voluptate dolore labore sit enim irure eiusmod esse dolor. Et Lorem nostrud aliquip quis occaecat est veniam aute aliqua. Ullamco veniam nulla esse sunt. Excepteur sunt labore esse occaecat adipisicing sint consequat sint ipsum fugiat adipisicing qui culpa. Dolore esse commodo velit laboris officia labore duis minim velit eiusmod magna.
    - template: component-column
      config:
        width: 1/3
        margin_bottom: '0'
        text_align: ''
      blocks:
      - template: component-content
        body_md: Consectetur in fugiat ad elit adipisicing incididunt irure amet anim
          veniam nostrud ut pariatur. Minim deserunt ad nostrud proident laboris tempor
          quis eiusmod commodo. Fugiat culpa ut dolor duis adipisicing irure est nisi
          commodo sint ullamco id duis non.
      title: Sidebar
  - template: component-container
    config:
      margin_bottom: '40'
    title: Container - Three Columns
    blocks:
    - template: component-column
      config:
        width: 1/3
        margin_bottom: '0'
        text_align: ''
      title: First
      blocks:
      - template: component-content
        body_md: |-
          ## Three columns

          Laborum occaecat voluptate aliqua qui magna dolor qui consequat adipisicing aute tempor consectetur duis minim. Consequat reprehenderit dolore laborum velit consectetur. Anim exercitation sit reprehenderit nulla commodo eu officia.

          Dolor et dolor eu enim anim nostrud reprehenderit ut sit velit culpa. Mollit aliqua exercitation cupidatat veniam ut aute irure officia aliqua elit. Eiusmod eu aliqua adipisicing anim non quis nisi irure culpa. Deserunt exercitation fugiat proident reprehenderit. Veniam fugiat labore in voluptate dolore nisi.
    - template: component-column
      config:
        width: 1/3
        margin_bottom: '0'
        text_align: ''
      title: Second
      blocks:
      - template: component-content
        body_md: |-
          Aliquip anim irure ea nulla aliquip. Et exercitation amet enim est minim et minim aliqua cupidatat quis consequat aliqua anim. Ut non magna duis cupidatat sint. Irure commodo consequat enim irure minim enim.

          Deserunt anim aliquip incididunt in ullamco proident eiusmod. Non dolore voluptate id aliqua pariatur non non. Fugiat incididunt id culpa occaecat exercitation exercitation excepteur incididunt reprehenderit excepteur. Laborum laborum sit dolor commodo.
    - template: component-column
      config:
        width: 1/3
        margin_bottom: '0'
        text_align: ''
      title: Third
      blocks:
      - template: component-content
        body_md: |-
          Qui fugiat in et ad exercitation consequat. Aliqua ad Lorem reprehenderit anim Lorem ipsum incididunt sit. Amet Lorem commodo esse aliquip laboris dolor. Consectetur aliqua ut dolore laboris ex ipsum nulla sint.

          Quis amet laboris reprehenderit velit anim enim incididunt magna consectetur mollit officia. Incididunt adipisicing ea aliqua dolor nulla amet. Labore est ut non amet elit consequat aliquip incididunt. Sit excepteur proident est quis ea consectetur et. Ex sunt commodo incididunt culpa enim proident. Id fugiat eu velit sint sit ea.
  - template: component-container
    config:
      margin_bottom: '40'
    blocks:
    - template: component-column
      config:
        width: 1/4
        margin_bottom: '0'
        text_align: ''
      title: First
      blocks:
      - template: component-content
        body_md: |-
          ## Four columns

          Qui fugiat in et ad exercitation consequat. Aliqua ad Lorem reprehenderit anim Lorem ipsum incididunt sit. Amet Lorem commodo esse aliquip laboris dolor. Consectetur aliqua ut dolore laboris ex ipsum nulla sint.

          Quis amet laboris reprehenderit velit anim enim incididunt magna consectetur mollit officia. Incididunt adipisicing ea aliqua dolor nulla amet. Labore est ut non amet elit consequat aliquip incididunt. Sit excepteur proident est quis ea consectetur et. Ex sunt commodo incididunt culpa enim proident. Id fugiat eu velit sint sit ea.
    - template: component-column
      config:
        width: 1/4
        margin_bottom: '0'
        text_align: ''
      title: Second
      blocks:
      - template: component-content
        body_md: Incididunt duis amet nisi ullamco ad enim ipsum voluptate.
    - template: component-column
      config:
        width: 1/4
        margin_bottom: '0'
        text_align: ''
      title: Third
      blocks:
      - template: component-content
        body_md: Quis reprehenderit irure esse velit ad aliqua ipsum dolore culpa
          cillum eiusmod proident dolore ad.
    - template: component-column
      config:
        width: 1/4
        margin_bottom: '0'
        text_align: ''
      title: Fourth
      blocks:
      - template: component-content
        body_md: Aliqua aute incididunt commodo deserunt cillum esse occaecat in tempor
          sint nisi ullamco non.
    title: Container - Four Columns
  - template: component-container
    config:
      margin_bottom: '0'
    title: Container - Stacked Columns
    blocks:
    - template: component-column
      config:
        width: full
        margin_bottom: '20'
        text_align: ''
      title: Heading
      blocks:
      - template: component-content
        body_md: |-
          ## Stacked columns

          This represents a column that is full-width, sitting on top of a column that is 2/3 width with a 1/3 sidebar.
    - template: component-column
      config:
        width: 2/3
        margin_bottom: '0'
        text_align: ''
      title: Main
      blocks:
      - template: component-content
        body_md: |-
          Quis amet laboris reprehenderit velit anim enim incididunt magna consectetur mollit officia. Incididunt adipisicing ea aliqua dolor nulla amet. Labore est ut non amet elit consequat aliquip incididunt. Sit excepteur proident est quis ea consectetur et. Ex sunt commodo incididunt culpa enim proident. Id fugiat eu velit sint sit ea.

          Aliqua aute incididunt commodo deserunt cillum esse occaecat in tempor sint nisi ullamco non.
    - template: component-column
      config:
        width: 1/3
        margin_bottom: '0'
        text_align: ''
      title: Sidebar
      blocks:
      - template: component-content
        body_md: Incididunt duis amet nisi ullamco ad enim ipsum voluptate.
seo:
  title: ''
  description: ''
  image_src: ''
  og:
    title: ''
    description: ''
    image_src: ''
  twitter:
    card: ''
    title: ''
    description: ''
    image_src: ''
exclude_from_sitemap: false

---
