-- Insert 25 new generated words (batch 11 - DALL-E 2 images)

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Septentrio', 'Septentrio means the northern regions or the north wind.', 'sep-TEN-tree-oh', 'Derived from the Latin word ''septem'' meaning seven and ''triones'' meaning plough oxen, referring to the seven stars of the Big Dipper.', 'The septentrio brings a chill to the morning air.', 'Septentrio frigorem ad matutinum aerem affert.', 'Navigators relied on the septentrio to guide them north.', 'Nautae septentrione ad septentrionem se ducebant.', 'The septentrio was fierce during the winter months.', 'Septentrio hieme acer erat.', '{Boreas,Aquilo}', '{Auster}', 'septentrio.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Septentrio'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Fera', 'Fera means a wild beast or animal.', 'FEH-rah', 'From the Latin word ''ferus'' meaning wild or untamed.', 'The forest was home to many feras.', 'Silva multis feris domicilium erat.', 'Hunters sought the fierce fera for its pelt.', 'Venatores feram ferocem propter pellem quaerebant.', 'The fera roamed the plains freely.', 'Fera libere per campos vagabatur.', '{Bestia,Animal}', '{Domitus}', 'fera.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Fera'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Cithara', 'Cithara means a type of musical instrument similar to a lyre.', 'KIH-thah-rah', 'Borrowed from Greek ''kithara'', a stringed musical instrument.', 'The musician played the cithara beautifully.', 'Musicus citharam pulchre cecinit.', 'The sound of the cithara filled the hall.', 'Sonitus citharae atrium implevit.', 'She learned to play the cithara at a young age.', 'Iuvene citharae ludere didicit.', '{Lyra,Testudo}', '{}', 'cithara.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Cithara'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Pinnarum', 'Pinnarum means of the wings or fins, often used in poetry.', 'PEEN-nah-rum', 'Derived from ''pinna'', meaning feather or wing.', 'The bird''s pinnarum were bright and beautiful.', 'Avis pinnarum clarae et pulchrae erant.', 'Fish use their pinnarum to navigate the waters.', 'Pisces pinnis suis aquas navigant.', 'The pinnarum of the eagle spread wide.', 'Aquilae pinnarum late patebant.', '{Alae,Pinnae}', '{}', 'pinnarum.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Pinnarum'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Tabula', 'Tabula means a board or tablet, often used for writing or drawing.', 'TAH-boo-lah', 'From the Latin word ''tabula'', meaning a flat piece or plank.', 'She wrote her notes on a tabula.', 'In tabula suas notas scripsit.', 'The tabula displayed the artist''s latest sketch.', 'Tabula novissimam artificis delineationem ostendit.', 'He erased the chalk from the tabula.', 'Creta ex tabula delevit.', '{Tabella,Planca}', '{}', 'tabula.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Tabula'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Sonitus', 'Sonitus means sound or noise.', 'soh-NEE-toos', 'Derived from the Latin verb ''sonare'', meaning to sound.', 'The sonitus of the bells echoed through the valley.', 'Sonitus campanarum per vallem resonabat.', 'A gentle sonitus came from the flowing stream.', 'Lenis sonitus ex flumine fluente veniebat.', 'The sonitus startled the sleeping cat.', 'Sonitus felem dormientem terruit.', '{Clamor,Strepitus}', '{Silentium}', 'sonitus.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Sonitus'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Vesper', 'Vesper means evening or the evening star.', 'VES-per', 'From the Latin word ''vesper'', meaning evening.', 'The vesper star shone brightly in the sky.', 'Vesper lucida in caelo fulsit.', 'As vesper approached, the day grew cooler.', 'Vespere appropinquante, dies frigidior factus est.', 'The village gathered for vesper prayers.', 'Vicus ad vesperas preces congregatus est.', '{Crepusculum,Noctis initium}', '{Aurora}', 'vesper.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Vesper'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Scribere', 'Scribere means to write or to compose.', 'SKREE-beh-ray', 'Derived from the Latin verb ''scribere'', meaning to write.', 'She loves to scribere stories in her journal.', 'Fabulas in diario suo scribere amat.', 'He plans to scribere a letter to his friend.', 'Epistolam amico suo scribere in animo habet.', 'The author decided to scribere a new novel.', 'Auctor novum librum scribere constituit.', '{Componere,Descrivere}', '{}', 'scribere.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Scribere'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Canticum', 'Canticum means a song or chant.', 'KAN-ti-koom', 'Derived from the Latin ''cantus'', meaning song.', 'The canticum filled the church with joy.', 'Canticum ecclesiam laetitia implebat.', 'She sang a canticum for the audience.', 'Canticum auditorio cecinit.', 'The choir rehearsed the canticum for Sunday service.', 'Chorus canticum pro dominica servitio exercuit.', '{Cantus,Hymnus}', '{}', 'canticum.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Canticum'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Pace', 'Pace means with peace or by the leave of.', 'PAH-keh', 'Derived from the Latin word ''pax'', meaning peace.', 'Pace your elders, always strive for harmony.', 'Pace maiorum, semper concordiam quaere.', 'She spoke, pace the critics, her mind.', 'Loquebatur, pace criticorum, mentem suam.', 'He acted, pace the regulations, with good intent.', 'Agebat, pace regularum, bono animo.', '{Pax,Tranquillitas}', '{Bellum,Discordia}', 'pace.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Pace'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Regina', 'Regina means queen.', 'reh-GEE-nah', 'Derived from the Latin ''rex'', meaning king, with the feminine suffix ''-ina''.', 'The regina ruled with wisdom and grace.', 'Regina sapientia et gratia regebat.', 'In the story, the regina was beloved by all.', 'In fabula, regina ab omnibus amatur.', 'The regina attended the royal banquet.', 'Regina convivio regio adfuit.', '{Monarcha,Imperatrix}', '{Rex}', 'regina.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Regina'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Oraculum', 'Oraculum means an oracle or prophetic message.', 'oh-RAH-koo-loom', 'Derived from the Latin ''orare'', meaning to speak or pray.', 'The oraculum predicted a great change.', 'Oraculum magnam mutationem praedixit.', 'Pilgrims sought the oraculum for guidance.', 'Peregrini oraculum ad consilium petebant.', 'The ancient oraculum was revered by the people.', 'Antiquum oraculum a populo reverebatur.', '{Vaticinium,Responsum}', '{}', 'oraculum.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Oraculum'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Voluntarius', 'Voluntarius means voluntary or willing.', 'voh-loon-TAH-ree-oos', 'Derived from ''voluntas'', meaning will or desire.', 'He offered his voluntarius service to the community.', 'Voluntarium servitium communitati obtulit.', 'Her voluntarius action inspired others.', 'Actio voluntaria alios inspiravit.', 'The voluntarius donation helped many.', 'Donatio voluntaria multos adiuvit.', '{Spontaneus,Libertus}', '{Coactus,Invitus}', 'voluntarius.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Voluntarius'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Solarium', 'Solarium means a sunroom or terrace.', 'soh-LAH-ree-um', 'Derived from the Latin ''sol'', meaning sun.', 'They relaxed in the solarium during the afternoon.', 'In solario post meridiem relaxabantur.', 'The solarium was filled with plants and sunlight.', 'Solarium plantis et sole impletum erat.', 'She enjoyed reading in the solarium.', 'In solario legere fruebatur.', '{Atrium,Porticus}', '{}', 'solarium.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Solarium'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Rogus', 'Rogus means a funeral pyre.', 'ROH-goos', 'Derived from the Latin ''rogare'', meaning to ask or to demand, possibly related to the gathering of materials for a pyre.', 'The hero was honored with a grand rogus.', 'Heroi cum magno rogo honorabatur.', 'The villagers gathered wood for the rogus.', 'Villani ligna pro rogo collegere.', 'Smoke rose from the burning rogus.', 'Fumus e rogo ardente surgebat.', '{Pyra,Focale}', '{}', 'rogus.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Rogus'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Sensa', 'Sensa means perceptions or feelings.', 'SEN-sah', 'Derived from the Latin ''sensus'', meaning sense or feeling.', 'Her sensa were heightened during the performance.', 'Eius sensa in spectaculo aucta sunt.', 'The artist expressed deep sensa through his work.', 'Artifex profunda sensa per opus suum expressit.', 'Sensa of joy filled the room.', 'Sensa laetitiae in cubiculo implebant.', '{Perceptio,Sententia}', '{}', 'sensa.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Sensa'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Sagum', 'Sagum means a military cloak or mantle.', 'SAH-goom', 'Derived from the Latin ''sagum'', a cloak worn by Roman soldiers.', 'The soldier wrapped his sagum tightly.', 'Miles sagum suum arcte circumdedit.', 'The sagum was a symbol of military life.', 'Sagum vitae militaris symbolum erat.', 'He donned his sagum before the march.', 'Ante iter suum sagum induit.', '{Chlamys,Pallium}', '{}', 'sagum.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Sagum'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Furis', 'Furis means a thief or a robber.', 'FOO-rees', 'Derived from the Latin ''fur'', meaning thief.', 'The furis was caught in the act.', 'Furis in actu captus est.', 'They guarded the house against the furis.', 'Domum contra furem custodiebant.', 'The furis fled into the night.', 'Furis in noctem fugit.', '{Latro,Praedo}', '{Custos}', 'furis.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Furis'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Sollicitudo', 'Sollicitudo means anxiety or concern.', 'sol-li-ci-TOO-doh', 'Derived from the Latin ''sollicitus'', meaning anxious or troubled.', 'Her sollicitudo was evident during the exam.', 'Sollicitudo eius in examine manifesta erat.', 'The news caused great sollicitudo among the people.', 'Nuntii magnam sollicitudinem apud populum attulerunt.', 'Sollicitudo kept him awake at night.', 'Sollicitudo eum nocte vigilare fecit.', '{Anxietas,Metus}', '{Tranquillitas,Securitas}', 'sollicitudo.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Sollicitudo'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Frugalitas', 'Frugalitas means frugality or economy.', 'frooh-gah-LEE-tahs', 'From the Latin ''frugalis'', meaning economical or thrifty.', 'Her frugalitas helped her save money.', 'Frugalitas eius pecuniam servare adiuvit.', 'Frugalitas is valued in difficult times.', 'Frugalitas temporibus difficilibus aestimatur.', 'The family practiced frugalitas in their daily life.', 'Familia in vita cotidiana frugalitatem exercebat.', '{Parcimonia,Temperantia}', '{Luxuria}', 'frugalitas.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Frugalitas'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Curatio', 'Curatio means care or treatment.', 'koo-RAH-tee-oh', 'Derived from the Latin ''curare'', meaning to care for.', 'The curatio of the patient was thorough.', 'Curatio aegroti diligens erat.', 'Curatio is essential for recovery.', 'Curatio ad convalescentiam necessaria est.', 'He sought curatio for his injuries.', 'Pro vulneribus suis curationem petivit.', '{Medela,Cura}', '{}', 'curatio.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Curatio'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Clades', 'Clades means disaster or defeat.', 'KLAH-des', 'From the Latin ''clades'', meaning destruction or ruin.', 'The earthquake was a clades for the city.', 'Terrae motus urbi clades fuit.', 'The army suffered a clades in battle.', 'Exercitus in proelio cladem passus est.', 'Efforts were made to recover from the clades.', 'Conatus sunt facti ut a clade reciperentur.', '{Calamitas,Ruina}', '{Victoria}', 'clades.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Clades'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Fulgor', 'Fulgor means brightness or splendor.', 'FOOL-gor', 'Derived from the Latin ''fulgere'', meaning to shine.', 'The fulgor of the sun was blinding.', 'Fulgor solis caecus erat.', 'Stars twinkled with fulgor in the night sky.', 'Stellae in caelo nocturno cum fulgore micabant.', 'The artist captured the fulgor of the landscape.', 'Artifex fulgorem loci cepit.', '{Splendor,Luces}', '{Tenebrae}', 'fulgor.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Fulgor'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Sollicitus', 'Sollicitus means worried or anxious.', 'sol-LIH-si-toos', 'Derived from the Latin ''sollicitare'', meaning to disturb or trouble.', 'He was sollicitus about the upcoming exam.', 'De examine venturo sollicitus erat.', 'The mother felt sollicitus for her son''s safety.', 'Mater pro salute filii sollicitus erat.', 'She appeared sollicitus when she received the letter.', 'Sollicita apparuit cum epistolam accepit.', '{Anxius,Trepidus}', '{Tranquillus,Confidens}', 'sollicitus.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Sollicitus'));

INSERT INTO word_of_the_day (word, definition, pronunciation, origin, example0, example0_latin, example1, example1_latin, example2, example2_latin, synonyms, antonyms, image)
SELECT 'Avarus', 'Avarus means greedy or covetous.', 'ah-VAH-roos', 'From the Latin ''avere'', meaning to crave or to desire.', 'The avarus man hoarded his wealth.', 'Avarus vir opes suas cumulavit.', 'Her avarus nature led to her downfall.', 'Natura avara ad ruinam eius duxit.', 'Avarus desires often cloud judgment.', 'Desideria avara saepe iudicium obfuscant.', '{Cupidus,Rapax}', '{Liberalitas,Generositas}', 'avarus.jpg'
WHERE NOT EXISTS (SELECT 1 FROM word_of_the_day WHERE LOWER(word) = LOWER('Avarus'));
