--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.2 (Debian 15.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pokemon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon (
    id integer NOT NULL,
    name character varying,
    img character varying,
    element_type character varying,
    hp integer DEFAULT 100 NOT NULL,
    attack integer DEFAULT 100 NOT NULL,
    defense integer DEFAULT 100 NOT NULL,
    stamina integer DEFAULT 100 NOT NULL,
    generation integer DEFAULT 1 NOT NULL,
    price integer DEFAULT 42 NOT NULL
);


ALTER TABLE public.pokemon OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying,
    password character varying,
    email character varying,
    role character varying DEFAULT 'user'::character varying,
    photo character varying,
    verified boolean
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: seq_user_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_user_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_user_id OWNER TO postgres;

--
-- Name: seq_user_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seq_user_id OWNED BY public."user".id;


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokemon (id, name, img, element_type, hp, attack, defense, stamina, generation, price) FROM stdin;
1	Bulbasaur	\N	\N	100	100	100	100	1	42
2	Ivysaur	\N	\N	100	100	100	100	1	42
3	Venusaur	\N	\N	100	100	100	100	1	42
4	Charmander	\N	\N	100	100	100	100	1	42
5	Charmeleon	\N	\N	100	100	100	100	1	42
6	Charizard	\N	\N	100	100	100	100	1	42
7	Squirtle	\N	\N	100	100	100	100	1	42
8	Wartortle	\N	\N	100	100	100	100	1	42
9	Blastoise	\N	\N	100	100	100	100	1	42
10	Caterpie	\N	\N	100	100	100	100	1	42
11	Metapod	\N	\N	100	100	100	100	1	42
12	Butterfree	\N	\N	100	100	100	100	1	42
13	Weedle	\N	\N	100	100	100	100	1	42
14	Kakuna	\N	\N	100	100	100	100	1	42
15	Beedrill	\N	\N	100	100	100	100	1	42
16	Pidgey	\N	\N	100	100	100	100	1	42
17	Pidgeotto	\N	\N	100	100	100	100	1	42
18	Pidgeot	\N	\N	100	100	100	100	1	42
19	Rattata	\N	\N	100	100	100	100	1	42
20	Raticate	\N	\N	100	100	100	100	1	42
21	Spearow	\N	\N	100	100	100	100	1	42
22	Fearow	\N	\N	100	100	100	100	1	42
23	Ekans	\N	\N	100	100	100	100	1	42
24	Arbok	\N	\N	100	100	100	100	1	42
25	Pikachu	\N	\N	100	100	100	100	1	42
26	Raichu	\N	\N	100	100	100	100	1	42
27	Sandshrew	\N	\N	100	100	100	100	1	42
28	Sandslash	\N	\N	100	100	100	100	1	42
29	Nidoran♀	\N	\N	100	100	100	100	1	42
30	Nidorina	\N	\N	100	100	100	100	1	42
31	Nidoqueen	\N	\N	100	100	100	100	1	42
32	Nidoran♂	\N	\N	100	100	100	100	1	42
33	Nidorino	\N	\N	100	100	100	100	1	42
34	Nidoking	\N	\N	100	100	100	100	1	42
35	Clefairy	\N	\N	100	100	100	100	1	42
36	Clefable	\N	\N	100	100	100	100	1	42
37	Vulpix	\N	\N	100	100	100	100	1	42
38	Ninetales	\N	\N	100	100	100	100	1	42
39	Jigglypuff	\N	\N	100	100	100	100	1	42
40	Wigglytuff	\N	\N	100	100	100	100	1	42
41	Zubat	\N	\N	100	100	100	100	1	42
42	Golbat	\N	\N	100	100	100	100	1	42
43	Oddish	\N	\N	100	100	100	100	1	42
44	Gloom	\N	\N	100	100	100	100	1	42
45	Vileplume	\N	\N	100	100	100	100	1	42
46	Paras	\N	\N	100	100	100	100	1	42
47	Parasect	\N	\N	100	100	100	100	1	42
48	Venonat	\N	\N	100	100	100	100	1	42
49	Venomoth	\N	\N	100	100	100	100	1	42
50	Diglett	\N	\N	100	100	100	100	1	42
51	Dugtrio	\N	\N	100	100	100	100	1	42
52	Meowth	\N	\N	100	100	100	100	1	42
53	Persian	\N	\N	100	100	100	100	1	42
54	Psyduck	\N	\N	100	100	100	100	1	42
55	Golduck	\N	\N	100	100	100	100	1	42
56	Mankey	\N	\N	100	100	100	100	1	42
57	Primeape	\N	\N	100	100	100	100	1	42
58	Growlithe	\N	\N	100	100	100	100	1	42
59	Arcanine	\N	\N	100	100	100	100	1	42
60	Poliwag	\N	\N	100	100	100	100	1	42
61	Poliwhirl	\N	\N	100	100	100	100	1	42
62	Poliwrath	\N	\N	100	100	100	100	1	42
63	Abra	\N	\N	100	100	100	100	1	42
64	Kadabra	\N	\N	100	100	100	100	1	42
65	Alakazam	\N	\N	100	100	100	100	1	42
66	Machop	\N	\N	100	100	100	100	1	42
67	Machoke	\N	\N	100	100	100	100	1	42
68	Machamp	\N	\N	100	100	100	100	1	42
69	Bellsprout	\N	\N	100	100	100	100	1	42
70	Weepinbell	\N	\N	100	100	100	100	1	42
71	Victreebel	\N	\N	100	100	100	100	1	42
72	Tentacool	\N	\N	100	100	100	100	1	42
73	Tentacruel	\N	\N	100	100	100	100	1	42
74	Geodude	\N	\N	100	100	100	100	1	42
75	Graveler	\N	\N	100	100	100	100	1	42
76	Golem	\N	\N	100	100	100	100	1	42
77	Ponyta	\N	\N	100	100	100	100	1	42
78	Rapidash	\N	\N	100	100	100	100	1	42
79	Slowpoke	\N	\N	100	100	100	100	1	42
80	Slowbro	\N	\N	100	100	100	100	1	42
81	Magnemite	\N	\N	100	100	100	100	1	42
82	Magneton	\N	\N	100	100	100	100	1	42
83	Farfetch’d	\N	\N	100	100	100	100	1	42
84	Doduo	\N	\N	100	100	100	100	1	42
85	Dodrio	\N	\N	100	100	100	100	1	42
86	Seel	\N	\N	100	100	100	100	1	42
87	Dewgong	\N	\N	100	100	100	100	1	42
88	Grimer	\N	\N	100	100	100	100	1	42
89	Muk	\N	\N	100	100	100	100	1	42
90	Shellder	\N	\N	100	100	100	100	1	42
91	Cloyster	\N	\N	100	100	100	100	1	42
92	Gastly	\N	\N	100	100	100	100	1	42
93	Haunter	\N	\N	100	100	100	100	1	42
94	Gengar	\N	\N	100	100	100	100	1	42
95	Onix	\N	\N	100	100	100	100	1	42
96	Drowzee	\N	\N	100	100	100	100	1	42
97	Hypno	\N	\N	100	100	100	100	1	42
98	Krabby	\N	\N	100	100	100	100	1	42
99	Kingler	\N	\N	100	100	100	100	1	42
100	Voltorb	\N	\N	100	100	100	100	1	42
101	Electrode	\N	\N	100	100	100	100	1	42
102	Exeggcute	\N	\N	100	100	100	100	1	42
103	Exeggutor	\N	\N	100	100	100	100	1	42
104	Cubone	\N	\N	100	100	100	100	1	42
105	Marowak	\N	\N	100	100	100	100	1	42
106	Hitmonlee	\N	\N	100	100	100	100	1	42
107	Hitmonchan	\N	\N	100	100	100	100	1	42
108	Lickitung	\N	\N	100	100	100	100	1	42
109	Koffing	\N	\N	100	100	100	100	1	42
110	Weezing	\N	\N	100	100	100	100	1	42
111	Rhyhorn	\N	\N	100	100	100	100	1	42
112	Rhydon	\N	\N	100	100	100	100	1	42
113	Chansey	\N	\N	100	100	100	100	1	42
114	Tangela	\N	\N	100	100	100	100	1	42
115	Kangaskhan	\N	\N	100	100	100	100	1	42
116	Horsea	\N	\N	100	100	100	100	1	42
117	Seadra	\N	\N	100	100	100	100	1	42
118	Goldeen	\N	\N	100	100	100	100	1	42
119	Seaking	\N	\N	100	100	100	100	1	42
120	Staryu	\N	\N	100	100	100	100	1	42
121	Starmie	\N	\N	100	100	100	100	1	42
122	Mr. Mime	\N	\N	100	100	100	100	1	42
123	Scyther	\N	\N	100	100	100	100	1	42
124	Jynx	\N	\N	100	100	100	100	1	42
125	Electabuzz	\N	\N	100	100	100	100	1	42
126	Magmar	\N	\N	100	100	100	100	1	42
127	Pinsir	\N	\N	100	100	100	100	1	42
128	Tauros	\N	\N	100	100	100	100	1	42
129	Magikarp	\N	\N	100	100	100	100	1	42
130	Gyarados	\N	\N	100	100	100	100	1	42
131	Lapras	\N	\N	100	100	100	100	1	42
132	Ditto	\N	\N	100	100	100	100	1	42
133	Eevee	\N	\N	100	100	100	100	1	42
134	Vaporeon	\N	\N	100	100	100	100	1	42
135	Jolteon	\N	\N	100	100	100	100	1	42
136	Flareon	\N	\N	100	100	100	100	1	42
137	Porygon	\N	\N	100	100	100	100	1	42
138	Omanyte	\N	\N	100	100	100	100	1	42
139	Omastar	\N	\N	100	100	100	100	1	42
140	Kabuto	\N	\N	100	100	100	100	1	42
141	Kabutops	\N	\N	100	100	100	100	1	42
142	Aerodactyl	\N	\N	100	100	100	100	1	42
143	Snorlax	\N	\N	100	100	100	100	1	42
144	Articuno	\N	\N	100	100	100	100	1	42
145	Zapdos	\N	\N	100	100	100	100	1	42
146	Moltres	\N	\N	100	100	100	100	1	42
147	Dratini	\N	\N	100	100	100	100	1	42
148	Dragonair	\N	\N	100	100	100	100	1	42
149	Dragonite	\N	\N	100	100	100	100	1	42
150	Mewtwo	\N	\N	100	100	100	100	1	42
151	Mew	\N	\N	100	100	100	100	1	42
152	Chikorita	\N	\N	100	100	100	100	1	42
153	Bayleef	\N	\N	100	100	100	100	1	42
154	Meganium	\N	\N	100	100	100	100	1	42
155	Cyndaquil	\N	\N	100	100	100	100	1	42
156	Quilava	\N	\N	100	100	100	100	1	42
157	Typhlosion	\N	\N	100	100	100	100	1	42
158	Totodile	\N	\N	100	100	100	100	1	42
159	Croconaw	\N	\N	100	100	100	100	1	42
160	Feraligatr	\N	\N	100	100	100	100	1	42
161	Sentret	\N	\N	100	100	100	100	1	42
162	Furret	\N	\N	100	100	100	100	1	42
163	Hoothoot	\N	\N	100	100	100	100	1	42
164	Noctowl	\N	\N	100	100	100	100	1	42
165	Ledyba	\N	\N	100	100	100	100	1	42
166	Ledian	\N	\N	100	100	100	100	1	42
167	Spinarak	\N	\N	100	100	100	100	1	42
168	Ariados	\N	\N	100	100	100	100	1	42
169	Crobat	\N	\N	100	100	100	100	1	42
170	Chinchou	\N	\N	100	100	100	100	1	42
171	Lanturn	\N	\N	100	100	100	100	1	42
172	Pichu	\N	\N	100	100	100	100	1	42
173	Cleffa	\N	\N	100	100	100	100	1	42
174	Igglybuff	\N	\N	100	100	100	100	1	42
175	Togepi	\N	\N	100	100	100	100	1	42
176	Togetic	\N	\N	100	100	100	100	1	42
177	Natu	\N	\N	100	100	100	100	1	42
178	Xatu	\N	\N	100	100	100	100	1	42
179	Mareep	\N	\N	100	100	100	100	1	42
180	Flaaffy	\N	\N	100	100	100	100	1	42
181	Ampharos	\N	\N	100	100	100	100	1	42
182	Bellossom	\N	\N	100	100	100	100	1	42
183	Marill	\N	\N	100	100	100	100	1	42
184	Azumarill	\N	\N	100	100	100	100	1	42
185	Sudowoodo	\N	\N	100	100	100	100	1	42
186	Politoed	\N	\N	100	100	100	100	1	42
187	Hoppip	\N	\N	100	100	100	100	1	42
188	Skiploom	\N	\N	100	100	100	100	1	42
189	Jumpluff	\N	\N	100	100	100	100	1	42
190	Aipom	\N	\N	100	100	100	100	1	42
191	Sunkern	\N	\N	100	100	100	100	1	42
192	Sunflora	\N	\N	100	100	100	100	1	42
193	Yanma	\N	\N	100	100	100	100	1	42
194	Wooper	\N	\N	100	100	100	100	1	42
195	Quagsire	\N	\N	100	100	100	100	1	42
196	Espeon	\N	\N	100	100	100	100	1	42
197	Umbreon	\N	\N	100	100	100	100	1	42
198	Murkrow	\N	\N	100	100	100	100	1	42
199	Slowking	\N	\N	100	100	100	100	1	42
200	Misdreavus	\N	\N	100	100	100	100	1	42
201	Unown	\N	\N	100	100	100	100	1	42
202	Wobbuffet	\N	\N	100	100	100	100	1	42
203	Girafarig	\N	\N	100	100	100	100	1	42
204	Pineco	\N	\N	100	100	100	100	1	42
205	Forretress	\N	\N	100	100	100	100	1	42
206	Dunsparce	\N	\N	100	100	100	100	1	42
207	Gligar	\N	\N	100	100	100	100	1	42
208	Steelix	\N	\N	100	100	100	100	1	42
209	Snubbull	\N	\N	100	100	100	100	1	42
210	Granbull	\N	\N	100	100	100	100	1	42
211	Qwilfish	\N	\N	100	100	100	100	1	42
212	Scizor	\N	\N	100	100	100	100	1	42
213	Shuckle	\N	\N	100	100	100	100	1	42
214	Heracross	\N	\N	100	100	100	100	1	42
215	Sneasel	\N	\N	100	100	100	100	1	42
216	Teddiursa	\N	\N	100	100	100	100	1	42
217	Ursaring	\N	\N	100	100	100	100	1	42
218	Slugma	\N	\N	100	100	100	100	1	42
219	Magcargo	\N	\N	100	100	100	100	1	42
220	Swinub	\N	\N	100	100	100	100	1	42
221	Piloswine	\N	\N	100	100	100	100	1	42
222	Corsola	\N	\N	100	100	100	100	1	42
223	Remoraid	\N	\N	100	100	100	100	1	42
224	Octillery	\N	\N	100	100	100	100	1	42
225	Delibird	\N	\N	100	100	100	100	1	42
226	Mantine	\N	\N	100	100	100	100	1	42
227	Skarmory	\N	\N	100	100	100	100	1	42
228	Houndour	\N	\N	100	100	100	100	1	42
229	Houndoom	\N	\N	100	100	100	100	1	42
230	Kingdra	\N	\N	100	100	100	100	1	42
231	Phanpy	\N	\N	100	100	100	100	1	42
232	Donphan	\N	\N	100	100	100	100	1	42
233	Porygon2	\N	\N	100	100	100	100	1	42
234	Stantler	\N	\N	100	100	100	100	1	42
235	Smeargle	\N	\N	100	100	100	100	1	42
236	Tyrogue	\N	\N	100	100	100	100	1	42
237	Hitmontop	\N	\N	100	100	100	100	1	42
238	Smoochum	\N	\N	100	100	100	100	1	42
239	Elekid	\N	\N	100	100	100	100	1	42
240	Magby	\N	\N	100	100	100	100	1	42
241	Miltank	\N	\N	100	100	100	100	1	42
242	Blissey	\N	\N	100	100	100	100	1	42
243	Raikou	\N	\N	100	100	100	100	1	42
244	Entei	\N	\N	100	100	100	100	1	42
245	Suicune	\N	\N	100	100	100	100	1	42
246	Larvitar	\N	\N	100	100	100	100	1	42
247	Pupitar	\N	\N	100	100	100	100	1	42
248	Tyranitar	\N	\N	100	100	100	100	1	42
249	Lugia	\N	\N	100	100	100	100	1	42
250	Ho-Oh	\N	\N	100	100	100	100	1	42
251	Celebi	\N	\N	100	100	100	100	1	42
252	Treecko	\N	\N	100	100	100	100	1	42
253	Grovyle	\N	\N	100	100	100	100	1	42
254	Sceptile	\N	\N	100	100	100	100	1	42
255	Torchic	\N	\N	100	100	100	100	1	42
256	Combusken	\N	\N	100	100	100	100	1	42
257	Blaziken	\N	\N	100	100	100	100	1	42
258	Mudkip	\N	\N	100	100	100	100	1	42
259	Marshtomp	\N	\N	100	100	100	100	1	42
260	Swampert	\N	\N	100	100	100	100	1	42
261	Poochyena	\N	\N	100	100	100	100	1	42
262	Mightyena	\N	\N	100	100	100	100	1	42
263	Zigzagoon	\N	\N	100	100	100	100	1	42
264	Linoone	\N	\N	100	100	100	100	1	42
265	Wurmple	\N	\N	100	100	100	100	1	42
266	Silcoon	\N	\N	100	100	100	100	1	42
267	Beautifly	\N	\N	100	100	100	100	1	42
268	Cascoon	\N	\N	100	100	100	100	1	42
269	Dustox	\N	\N	100	100	100	100	1	42
270	Lotad	\N	\N	100	100	100	100	1	42
271	Lombre	\N	\N	100	100	100	100	1	42
272	Ludicolo	\N	\N	100	100	100	100	1	42
273	Seedot	\N	\N	100	100	100	100	1	42
274	Nuzleaf	\N	\N	100	100	100	100	1	42
275	Shiftry	\N	\N	100	100	100	100	1	42
276	Taillow	\N	\N	100	100	100	100	1	42
277	Swellow	\N	\N	100	100	100	100	1	42
278	Wingull	\N	\N	100	100	100	100	1	42
279	Pelipper	\N	\N	100	100	100	100	1	42
280	Ralts	\N	\N	100	100	100	100	1	42
281	Kirlia	\N	\N	100	100	100	100	1	42
282	Gardevoir	\N	\N	100	100	100	100	1	42
283	Surskit	\N	\N	100	100	100	100	1	42
284	Masquerain	\N	\N	100	100	100	100	1	42
285	Shroomish	\N	\N	100	100	100	100	1	42
286	Breloom	\N	\N	100	100	100	100	1	42
287	Slakoth	\N	\N	100	100	100	100	1	42
288	Vigoroth	\N	\N	100	100	100	100	1	42
289	Slaking	\N	\N	100	100	100	100	1	42
290	Nincada	\N	\N	100	100	100	100	1	42
291	Ninjask	\N	\N	100	100	100	100	1	42
292	Shedinja	\N	\N	100	100	100	100	1	42
293	Whismur	\N	\N	100	100	100	100	1	42
294	Loudred	\N	\N	100	100	100	100	1	42
295	Exploud	\N	\N	100	100	100	100	1	42
296	Makuhita	\N	\N	100	100	100	100	1	42
297	Hariyama	\N	\N	100	100	100	100	1	42
298	Azurill	\N	\N	100	100	100	100	1	42
299	Nosepass	\N	\N	100	100	100	100	1	42
300	Skitty	\N	\N	100	100	100	100	1	42
301	Delcatty	\N	\N	100	100	100	100	1	42
302	Sableye	\N	\N	100	100	100	100	1	42
303	Mawile	\N	\N	100	100	100	100	1	42
304	Aron	\N	\N	100	100	100	100	1	42
305	Lairon	\N	\N	100	100	100	100	1	42
306	Aggron	\N	\N	100	100	100	100	1	42
307	Meditite	\N	\N	100	100	100	100	1	42
308	Medicham	\N	\N	100	100	100	100	1	42
309	Electrike	\N	\N	100	100	100	100	1	42
310	Manectric	\N	\N	100	100	100	100	1	42
311	Plusle	\N	\N	100	100	100	100	1	42
312	Minun	\N	\N	100	100	100	100	1	42
313	Volbeat	\N	\N	100	100	100	100	1	42
314	Illumise	\N	\N	100	100	100	100	1	42
315	Roselia	\N	\N	100	100	100	100	1	42
316	Gulpin	\N	\N	100	100	100	100	1	42
317	Swalot	\N	\N	100	100	100	100	1	42
318	Carvanha	\N	\N	100	100	100	100	1	42
319	Sharpedo	\N	\N	100	100	100	100	1	42
320	Wailmer	\N	\N	100	100	100	100	1	42
321	Wailord	\N	\N	100	100	100	100	1	42
322	Numel	\N	\N	100	100	100	100	1	42
323	Camerupt	\N	\N	100	100	100	100	1	42
324	Torkoal	\N	\N	100	100	100	100	1	42
325	Spoink	\N	\N	100	100	100	100	1	42
326	Grumpig	\N	\N	100	100	100	100	1	42
327	Spinda	\N	\N	100	100	100	100	1	42
328	Trapinch	\N	\N	100	100	100	100	1	42
329	Vibrava	\N	\N	100	100	100	100	1	42
330	Flygon	\N	\N	100	100	100	100	1	42
331	Cacnea	\N	\N	100	100	100	100	1	42
332	Cacturne	\N	\N	100	100	100	100	1	42
333	Swablu	\N	\N	100	100	100	100	1	42
334	Altaria	\N	\N	100	100	100	100	1	42
335	Zangoose	\N	\N	100	100	100	100	1	42
336	Seviper	\N	\N	100	100	100	100	1	42
337	Lunatone	\N	\N	100	100	100	100	1	42
338	Solrock	\N	\N	100	100	100	100	1	42
339	Barboach	\N	\N	100	100	100	100	1	42
340	Whiscash	\N	\N	100	100	100	100	1	42
341	Corphish	\N	\N	100	100	100	100	1	42
342	Crawdaunt	\N	\N	100	100	100	100	1	42
343	Baltoy	\N	\N	100	100	100	100	1	42
344	Claydol	\N	\N	100	100	100	100	1	42
345	Lileep	\N	\N	100	100	100	100	1	42
346	Cradily	\N	\N	100	100	100	100	1	42
347	Anorith	\N	\N	100	100	100	100	1	42
348	Armaldo	\N	\N	100	100	100	100	1	42
349	Feebas	\N	\N	100	100	100	100	1	42
350	Milotic	\N	\N	100	100	100	100	1	42
351	Castform	\N	\N	100	100	100	100	1	42
352	Kecleon	\N	\N	100	100	100	100	1	42
353	Shuppet	\N	\N	100	100	100	100	1	42
354	Banette	\N	\N	100	100	100	100	1	42
355	Duskull	\N	\N	100	100	100	100	1	42
356	Dusclops	\N	\N	100	100	100	100	1	42
357	Tropius	\N	\N	100	100	100	100	1	42
358	Chimecho	\N	\N	100	100	100	100	1	42
359	Absol	\N	\N	100	100	100	100	1	42
360	Wynaut	\N	\N	100	100	100	100	1	42
361	Snorunt	\N	\N	100	100	100	100	1	42
362	Glalie	\N	\N	100	100	100	100	1	42
363	Spheal	\N	\N	100	100	100	100	1	42
364	Sealeo	\N	\N	100	100	100	100	1	42
365	Walrein	\N	\N	100	100	100	100	1	42
366	Clamperl	\N	\N	100	100	100	100	1	42
367	Huntail	\N	\N	100	100	100	100	1	42
368	Gorebyss	\N	\N	100	100	100	100	1	42
369	Relicanth	\N	\N	100	100	100	100	1	42
370	Luvdisc	\N	\N	100	100	100	100	1	42
371	Bagon	\N	\N	100	100	100	100	1	42
372	Shelgon	\N	\N	100	100	100	100	1	42
373	Salamence	\N	\N	100	100	100	100	1	42
374	Beldum	\N	\N	100	100	100	100	1	42
375	Metang	\N	\N	100	100	100	100	1	42
376	Metagross	\N	\N	100	100	100	100	1	42
377	Regirock	\N	\N	100	100	100	100	1	42
378	Regice	\N	\N	100	100	100	100	1	42
379	Registeel	\N	\N	100	100	100	100	1	42
380	Latias	\N	\N	100	100	100	100	1	42
381	Latios	\N	\N	100	100	100	100	1	42
382	Kyogre	\N	\N	100	100	100	100	1	42
383	Groudon	\N	\N	100	100	100	100	1	42
384	Rayquaza	\N	\N	100	100	100	100	1	42
385	Jirachi	\N	\N	100	100	100	100	1	42
386	Deoxys	\N	\N	100	100	100	100	1	42
387	Turtwig	\N	\N	100	100	100	100	1	42
388	Grotle	\N	\N	100	100	100	100	1	42
389	Torterra	\N	\N	100	100	100	100	1	42
390	Chimchar	\N	\N	100	100	100	100	1	42
391	Monferno	\N	\N	100	100	100	100	1	42
392	Infernape	\N	\N	100	100	100	100	1	42
393	Piplup	\N	\N	100	100	100	100	1	42
394	Prinplup	\N	\N	100	100	100	100	1	42
395	Empoleon	\N	\N	100	100	100	100	1	42
396	Starly	\N	\N	100	100	100	100	1	42
397	Staravia	\N	\N	100	100	100	100	1	42
398	Staraptor	\N	\N	100	100	100	100	1	42
399	Bidoof	\N	\N	100	100	100	100	1	42
400	Bibarel	\N	\N	100	100	100	100	1	42
401	Kricketot	\N	\N	100	100	100	100	1	42
402	Kricketune	\N	\N	100	100	100	100	1	42
403	Shinx	\N	\N	100	100	100	100	1	42
404	Luxio	\N	\N	100	100	100	100	1	42
405	Luxray	\N	\N	100	100	100	100	1	42
406	Budew	\N	\N	100	100	100	100	1	42
407	Roserade	\N	\N	100	100	100	100	1	42
408	Cranidos	\N	\N	100	100	100	100	1	42
409	Rampardos	\N	\N	100	100	100	100	1	42
410	Shieldon	\N	\N	100	100	100	100	1	42
411	Bastiodon	\N	\N	100	100	100	100	1	42
412	Burmy	\N	\N	100	100	100	100	1	42
413	Wormadam	\N	\N	100	100	100	100	1	42
414	Mothim	\N	\N	100	100	100	100	1	42
415	Combee	\N	\N	100	100	100	100	1	42
416	Vespiquen	\N	\N	100	100	100	100	1	42
417	Pachirisu	\N	\N	100	100	100	100	1	42
418	Buizel	\N	\N	100	100	100	100	1	42
419	Floatzel	\N	\N	100	100	100	100	1	42
420	Cherubi	\N	\N	100	100	100	100	1	42
421	Cherrim	\N	\N	100	100	100	100	1	42
422	Shellos	\N	\N	100	100	100	100	1	42
423	Gastrodon	\N	\N	100	100	100	100	1	42
424	Ambipom	\N	\N	100	100	100	100	1	42
425	Drifloon	\N	\N	100	100	100	100	1	42
426	Drifblim	\N	\N	100	100	100	100	1	42
427	Buneary	\N	\N	100	100	100	100	1	42
428	Lopunny	\N	\N	100	100	100	100	1	42
429	Mismagius	\N	\N	100	100	100	100	1	42
430	Honchkrow	\N	\N	100	100	100	100	1	42
431	Glameow	\N	\N	100	100	100	100	1	42
432	Purugly	\N	\N	100	100	100	100	1	42
433	Chingling	\N	\N	100	100	100	100	1	42
434	Stunky	\N	\N	100	100	100	100	1	42
435	Skuntank	\N	\N	100	100	100	100	1	42
436	Bronzor	\N	\N	100	100	100	100	1	42
437	Bronzong	\N	\N	100	100	100	100	1	42
438	Bonsly	\N	\N	100	100	100	100	1	42
439	Mime Jr.	\N	\N	100	100	100	100	1	42
440	Happiny	\N	\N	100	100	100	100	1	42
441	Chatot	\N	\N	100	100	100	100	1	42
442	Spiritomb	\N	\N	100	100	100	100	1	42
443	Gible	\N	\N	100	100	100	100	1	42
444	Gabite	\N	\N	100	100	100	100	1	42
445	Garchomp	\N	\N	100	100	100	100	1	42
446	Munchlax	\N	\N	100	100	100	100	1	42
447	Riolu	\N	\N	100	100	100	100	1	42
448	Lucario	\N	\N	100	100	100	100	1	42
449	Hippopotas	\N	\N	100	100	100	100	1	42
450	Hippowdon	\N	\N	100	100	100	100	1	42
451	Skorupi	\N	\N	100	100	100	100	1	42
452	Drapion	\N	\N	100	100	100	100	1	42
453	Croagunk	\N	\N	100	100	100	100	1	42
454	Toxicroak	\N	\N	100	100	100	100	1	42
455	Carnivine	\N	\N	100	100	100	100	1	42
456	Finneon	\N	\N	100	100	100	100	1	42
457	Lumineon	\N	\N	100	100	100	100	1	42
458	Mantyke	\N	\N	100	100	100	100	1	42
459	Snover	\N	\N	100	100	100	100	1	42
460	Abomasnow	\N	\N	100	100	100	100	1	42
461	Weavile	\N	\N	100	100	100	100	1	42
462	Magnezone	\N	\N	100	100	100	100	1	42
463	Lickilicky	\N	\N	100	100	100	100	1	42
464	Rhyperior	\N	\N	100	100	100	100	1	42
465	Tangrowth	\N	\N	100	100	100	100	1	42
466	Electivire	\N	\N	100	100	100	100	1	42
467	Magmortar	\N	\N	100	100	100	100	1	42
468	Togekiss	\N	\N	100	100	100	100	1	42
469	Yanmega	\N	\N	100	100	100	100	1	42
470	Leafeon	\N	\N	100	100	100	100	1	42
471	Glaceon	\N	\N	100	100	100	100	1	42
472	Gliscor	\N	\N	100	100	100	100	1	42
473	Mamoswine	\N	\N	100	100	100	100	1	42
474	Porygon-Z	\N	\N	100	100	100	100	1	42
475	Gallade	\N	\N	100	100	100	100	1	42
476	Probopass	\N	\N	100	100	100	100	1	42
477	Dusknoir	\N	\N	100	100	100	100	1	42
478	Froslass	\N	\N	100	100	100	100	1	42
479	Rotom	\N	\N	100	100	100	100	1	42
480	Uxie	\N	\N	100	100	100	100	1	42
481	Mesprit	\N	\N	100	100	100	100	1	42
482	Azelf	\N	\N	100	100	100	100	1	42
483	Dialga	\N	\N	100	100	100	100	1	42
484	Palkia	\N	\N	100	100	100	100	1	42
485	Heatran	\N	\N	100	100	100	100	1	42
486	Regigigas	\N	\N	100	100	100	100	1	42
487	Giratina	\N	\N	100	100	100	100	1	42
488	Cresselia	\N	\N	100	100	100	100	1	42
489	Phione	\N	\N	100	100	100	100	1	42
490	Manaphy	\N	\N	100	100	100	100	1	42
491	Darkrai	\N	\N	100	100	100	100	1	42
492	Shaymin	\N	\N	100	100	100	100	1	42
493	Arceus	\N	\N	100	100	100	100	1	42
494	Victini	\N	\N	100	100	100	100	1	42
495	Snivy	\N	\N	100	100	100	100	1	42
496	Servine	\N	\N	100	100	100	100	1	42
497	Serperior	\N	\N	100	100	100	100	1	42
498	Tepig	\N	\N	100	100	100	100	1	42
499	Pignite	\N	\N	100	100	100	100	1	42
500	Emboar	\N	\N	100	100	100	100	1	42
501	Oshawott	\N	\N	100	100	100	100	1	42
502	Dewott	\N	\N	100	100	100	100	1	42
503	Samurott	\N	\N	100	100	100	100	1	42
504	Patrat	\N	\N	100	100	100	100	1	42
505	Watchog	\N	\N	100	100	100	100	1	42
506	Lillipup	\N	\N	100	100	100	100	1	42
507	Herdier	\N	\N	100	100	100	100	1	42
508	Stoutland	\N	\N	100	100	100	100	1	42
509	Purrloin	\N	\N	100	100	100	100	1	42
510	Liepard	\N	\N	100	100	100	100	1	42
511	Pansage	\N	\N	100	100	100	100	1	42
512	Simisage	\N	\N	100	100	100	100	1	42
513	Pansear	\N	\N	100	100	100	100	1	42
514	Simisear	\N	\N	100	100	100	100	1	42
515	Panpour	\N	\N	100	100	100	100	1	42
516	Simipour	\N	\N	100	100	100	100	1	42
517	Munna	\N	\N	100	100	100	100	1	42
518	Musharna	\N	\N	100	100	100	100	1	42
519	Pidove	\N	\N	100	100	100	100	1	42
520	Tranquill	\N	\N	100	100	100	100	1	42
521	Unfezant	\N	\N	100	100	100	100	1	42
522	Blitzle	\N	\N	100	100	100	100	1	42
523	Zebstrika	\N	\N	100	100	100	100	1	42
524	Roggenrola	\N	\N	100	100	100	100	1	42
525	Boldore	\N	\N	100	100	100	100	1	42
526	Gigalith	\N	\N	100	100	100	100	1	42
527	Woobat	\N	\N	100	100	100	100	1	42
528	Swoobat	\N	\N	100	100	100	100	1	42
529	Drilbur	\N	\N	100	100	100	100	1	42
530	Excadrill	\N	\N	100	100	100	100	1	42
531	Audino	\N	\N	100	100	100	100	1	42
532	Timburr	\N	\N	100	100	100	100	1	42
533	Gurdurr	\N	\N	100	100	100	100	1	42
534	Conkeldurr	\N	\N	100	100	100	100	1	42
535	Tympole	\N	\N	100	100	100	100	1	42
536	Palpitoad	\N	\N	100	100	100	100	1	42
537	Seismitoad	\N	\N	100	100	100	100	1	42
538	Throh	\N	\N	100	100	100	100	1	42
539	Sawk	\N	\N	100	100	100	100	1	42
540	Sewaddle	\N	\N	100	100	100	100	1	42
541	Swadloon	\N	\N	100	100	100	100	1	42
542	Leavanny	\N	\N	100	100	100	100	1	42
543	Venipede	\N	\N	100	100	100	100	1	42
544	Whirlipede	\N	\N	100	100	100	100	1	42
545	Scolipede	\N	\N	100	100	100	100	1	42
546	Cottonee	\N	\N	100	100	100	100	1	42
547	Whimsicott	\N	\N	100	100	100	100	1	42
548	Petilil	\N	\N	100	100	100	100	1	42
549	Lilligant	\N	\N	100	100	100	100	1	42
550	Basculin	\N	\N	100	100	100	100	1	42
551	Sandile	\N	\N	100	100	100	100	1	42
552	Krokorok	\N	\N	100	100	100	100	1	42
553	Krookodile	\N	\N	100	100	100	100	1	42
554	Darumaka	\N	\N	100	100	100	100	1	42
555	Darmanitan	\N	\N	100	100	100	100	1	42
556	Maractus	\N	\N	100	100	100	100	1	42
557	Dwebble	\N	\N	100	100	100	100	1	42
558	Crustle	\N	\N	100	100	100	100	1	42
559	Scraggy	\N	\N	100	100	100	100	1	42
560	Scrafty	\N	\N	100	100	100	100	1	42
561	Sigilyph	\N	\N	100	100	100	100	1	42
562	Yamask	\N	\N	100	100	100	100	1	42
563	Cofagrigus	\N	\N	100	100	100	100	1	42
564	Tirtouga	\N	\N	100	100	100	100	1	42
565	Carracosta	\N	\N	100	100	100	100	1	42
566	Archen	\N	\N	100	100	100	100	1	42
567	Archeops	\N	\N	100	100	100	100	1	42
568	Trubbish	\N	\N	100	100	100	100	1	42
569	Garbodor	\N	\N	100	100	100	100	1	42
570	Zorua	\N	\N	100	100	100	100	1	42
571	Zoroark	\N	\N	100	100	100	100	1	42
572	Minccino	\N	\N	100	100	100	100	1	42
573	Cinccino	\N	\N	100	100	100	100	1	42
574	Gothita	\N	\N	100	100	100	100	1	42
575	Gothorita	\N	\N	100	100	100	100	1	42
576	Gothitelle	\N	\N	100	100	100	100	1	42
577	Solosis	\N	\N	100	100	100	100	1	42
578	Duosion	\N	\N	100	100	100	100	1	42
579	Reuniclus	\N	\N	100	100	100	100	1	42
580	Ducklett	\N	\N	100	100	100	100	1	42
581	Swanna	\N	\N	100	100	100	100	1	42
582	Vanillite	\N	\N	100	100	100	100	1	42
583	Vanillish	\N	\N	100	100	100	100	1	42
584	Vanilluxe	\N	\N	100	100	100	100	1	42
585	Deerling	\N	\N	100	100	100	100	1	42
586	Sawsbuck	\N	\N	100	100	100	100	1	42
587	Emolga	\N	\N	100	100	100	100	1	42
588	Karrablast	\N	\N	100	100	100	100	1	42
589	Escavalier	\N	\N	100	100	100	100	1	42
590	Foongus	\N	\N	100	100	100	100	1	42
591	Amoonguss	\N	\N	100	100	100	100	1	42
592	Frillish	\N	\N	100	100	100	100	1	42
593	Jellicent	\N	\N	100	100	100	100	1	42
594	Alomomola	\N	\N	100	100	100	100	1	42
595	Joltik	\N	\N	100	100	100	100	1	42
596	Galvantula	\N	\N	100	100	100	100	1	42
597	Ferroseed	\N	\N	100	100	100	100	1	42
598	Ferrothorn	\N	\N	100	100	100	100	1	42
599	Klink	\N	\N	100	100	100	100	1	42
600	Klang	\N	\N	100	100	100	100	1	42
601	Klinklang	\N	\N	100	100	100	100	1	42
602	Tynamo	\N	\N	100	100	100	100	1	42
603	Eelektrik	\N	\N	100	100	100	100	1	42
604	Eelektross	\N	\N	100	100	100	100	1	42
605	Elgyem	\N	\N	100	100	100	100	1	42
606	Beheeyem	\N	\N	100	100	100	100	1	42
607	Litwick	\N	\N	100	100	100	100	1	42
608	Lampent	\N	\N	100	100	100	100	1	42
609	Chandelure	\N	\N	100	100	100	100	1	42
610	Axew	\N	\N	100	100	100	100	1	42
611	Fraxure	\N	\N	100	100	100	100	1	42
612	Haxorus	\N	\N	100	100	100	100	1	42
613	Cubchoo	\N	\N	100	100	100	100	1	42
614	Beartic	\N	\N	100	100	100	100	1	42
615	Cryogonal	\N	\N	100	100	100	100	1	42
616	Shelmet	\N	\N	100	100	100	100	1	42
617	Accelgor	\N	\N	100	100	100	100	1	42
618	Stunfisk	\N	\N	100	100	100	100	1	42
619	Mienfoo	\N	\N	100	100	100	100	1	42
620	Mienshao	\N	\N	100	100	100	100	1	42
621	Druddigon	\N	\N	100	100	100	100	1	42
622	Golett	\N	\N	100	100	100	100	1	42
623	Golurk	\N	\N	100	100	100	100	1	42
624	Pawniard	\N	\N	100	100	100	100	1	42
625	Bisharp	\N	\N	100	100	100	100	1	42
626	Bouffalant	\N	\N	100	100	100	100	1	42
627	Rufflet	\N	\N	100	100	100	100	1	42
628	Braviary	\N	\N	100	100	100	100	1	42
629	Vullaby	\N	\N	100	100	100	100	1	42
630	Mandibuzz	\N	\N	100	100	100	100	1	42
631	Heatmor	\N	\N	100	100	100	100	1	42
632	Durant	\N	\N	100	100	100	100	1	42
633	Deino	\N	\N	100	100	100	100	1	42
634	Zweilous	\N	\N	100	100	100	100	1	42
635	Hydreigon	\N	\N	100	100	100	100	1	42
636	Larvesta	\N	\N	100	100	100	100	1	42
637	Volcarona	\N	\N	100	100	100	100	1	42
638	Cobalion	\N	\N	100	100	100	100	1	42
639	Terrakion	\N	\N	100	100	100	100	1	42
640	Virizion	\N	\N	100	100	100	100	1	42
641	Tornadus	\N	\N	100	100	100	100	1	42
642	Thundurus	\N	\N	100	100	100	100	1	42
643	Reshiram	\N	\N	100	100	100	100	1	42
644	Zekrom	\N	\N	100	100	100	100	1	42
645	Landorus	\N	\N	100	100	100	100	1	42
646	Kyurem	\N	\N	100	100	100	100	1	42
647	Keldeo	\N	\N	100	100	100	100	1	42
648	Meloetta	\N	\N	100	100	100	100	1	42
649	Genesect	\N	\N	100	100	100	100	1	42
650	Chespin	\N	\N	100	100	100	100	1	42
651	Quilladin	\N	\N	100	100	100	100	1	42
652	Chesnaught	\N	\N	100	100	100	100	1	42
653	Fennekin	\N	\N	100	100	100	100	1	42
654	Braixen	\N	\N	100	100	100	100	1	42
655	Delphox	\N	\N	100	100	100	100	1	42
656	Froakie	\N	\N	100	100	100	100	1	42
657	Frogadier	\N	\N	100	100	100	100	1	42
658	Greninja	\N	\N	100	100	100	100	1	42
659	Bunnelby	\N	\N	100	100	100	100	1	42
660	Diggersby	\N	\N	100	100	100	100	1	42
661	Fletchling	\N	\N	100	100	100	100	1	42
662	Fletchinder	\N	\N	100	100	100	100	1	42
663	Talonflame	\N	\N	100	100	100	100	1	42
664	Scatterbug	\N	\N	100	100	100	100	1	42
665	Spewpa	\N	\N	100	100	100	100	1	42
666	Vivillon	\N	\N	100	100	100	100	1	42
667	Litleo	\N	\N	100	100	100	100	1	42
668	Pyroar	\N	\N	100	100	100	100	1	42
669	Flabebe	\N	\N	100	100	100	100	1	42
670	Floette	\N	\N	100	100	100	100	1	42
671	Florges	\N	\N	100	100	100	100	1	42
672	Skiddo	\N	\N	100	100	100	100	1	42
673	Gogoat	\N	\N	100	100	100	100	1	42
674	Pancham	\N	\N	100	100	100	100	1	42
675	Pangoro	\N	\N	100	100	100	100	1	42
676	Furfrou	\N	\N	100	100	100	100	1	42
677	Espurr	\N	\N	100	100	100	100	1	42
678	Meowstic	\N	\N	100	100	100	100	1	42
679	Honedge	\N	\N	100	100	100	100	1	42
680	Doublade	\N	\N	100	100	100	100	1	42
681	Aegislash	\N	\N	100	100	100	100	1	42
682	Spritzee	\N	\N	100	100	100	100	1	42
683	Aromatisse	\N	\N	100	100	100	100	1	42
684	Swirlix	\N	\N	100	100	100	100	1	42
685	Slurpuff	\N	\N	100	100	100	100	1	42
686	Inkay	\N	\N	100	100	100	100	1	42
687	Malamar	\N	\N	100	100	100	100	1	42
688	Binacle	\N	\N	100	100	100	100	1	42
689	Barbaracle	\N	\N	100	100	100	100	1	42
690	Skrelp	\N	\N	100	100	100	100	1	42
691	Dragalge	\N	\N	100	100	100	100	1	42
692	Clauncher	\N	\N	100	100	100	100	1	42
693	Clawitzer	\N	\N	100	100	100	100	1	42
694	Helioptile	\N	\N	100	100	100	100	1	42
695	Heliolisk	\N	\N	100	100	100	100	1	42
696	Tyrunt	\N	\N	100	100	100	100	1	42
697	Tyrantrum	\N	\N	100	100	100	100	1	42
698	Amaura	\N	\N	100	100	100	100	1	42
699	Aurorus	\N	\N	100	100	100	100	1	42
700	Sylveon	\N	\N	100	100	100	100	1	42
701	Hawlucha	\N	\N	100	100	100	100	1	42
702	Dedenne	\N	\N	100	100	100	100	1	42
703	Carbink	\N	\N	100	100	100	100	1	42
704	Goomy	\N	\N	100	100	100	100	1	42
705	Sliggoo	\N	\N	100	100	100	100	1	42
706	Goodra	\N	\N	100	100	100	100	1	42
707	Klefki	\N	\N	100	100	100	100	1	42
708	Phantump	\N	\N	100	100	100	100	1	42
709	Trevenant	\N	\N	100	100	100	100	1	42
710	Pumpkaboo	\N	\N	100	100	100	100	1	42
711	Gourgeist	\N	\N	100	100	100	100	1	42
712	Bergmite	\N	\N	100	100	100	100	1	42
713	Avalugg	\N	\N	100	100	100	100	1	42
714	Noibat	\N	\N	100	100	100	100	1	42
715	Noivern	\N	\N	100	100	100	100	1	42
716	Xerneas	\N	\N	100	100	100	100	1	42
717	Yveltal	\N	\N	100	100	100	100	1	42
718	Zygarde	\N	\N	100	100	100	100	1	42
719	Diancie	\N	\N	100	100	100	100	1	42
720	Hoopa	\N	\N	100	100	100	100	1	42
721	Volcanion	\N	\N	100	100	100	100	1	42
722	Rowlet	\N	\N	100	100	100	100	1	42
723	Dartrix	\N	\N	100	100	100	100	1	42
724	Decidueye	\N	\N	100	100	100	100	1	42
725	Litten	\N	\N	100	100	100	100	1	42
726	Torracat	\N	\N	100	100	100	100	1	42
727	Incineroar	\N	\N	100	100	100	100	1	42
728	Popplio	\N	\N	100	100	100	100	1	42
729	Brionne	\N	\N	100	100	100	100	1	42
730	Primarina	\N	\N	100	100	100	100	1	42
731	Pikipek	\N	\N	100	100	100	100	1	42
732	Trumbeak	\N	\N	100	100	100	100	1	42
733	Toucannon	\N	\N	100	100	100	100	1	42
734	Yungoos	\N	\N	100	100	100	100	1	42
735	Gumshoos	\N	\N	100	100	100	100	1	42
736	Grubbin	\N	\N	100	100	100	100	1	42
737	Charjabug	\N	\N	100	100	100	100	1	42
738	Vikavolt	\N	\N	100	100	100	100	1	42
739	Crabrawler	\N	\N	100	100	100	100	1	42
740	Crabominable	\N	\N	100	100	100	100	1	42
741	Oricorio	\N	\N	100	100	100	100	1	42
742	Cutiefly	\N	\N	100	100	100	100	1	42
743	Ribombee	\N	\N	100	100	100	100	1	42
744	Rockruff	\N	\N	100	100	100	100	1	42
745	Lycanroc	\N	\N	100	100	100	100	1	42
746	Wishiwashi	\N	\N	100	100	100	100	1	42
747	Mareanie	\N	\N	100	100	100	100	1	42
748	Toxapex	\N	\N	100	100	100	100	1	42
749	Mudbray	\N	\N	100	100	100	100	1	42
750	Mudsdale	\N	\N	100	100	100	100	1	42
751	Dewpider	\N	\N	100	100	100	100	1	42
752	Araquanid	\N	\N	100	100	100	100	1	42
753	Fomantis	\N	\N	100	100	100	100	1	42
754	Lurantis	\N	\N	100	100	100	100	1	42
755	Morelull	\N	\N	100	100	100	100	1	42
756	Shiinotic	\N	\N	100	100	100	100	1	42
757	Salandit	\N	\N	100	100	100	100	1	42
758	Salazzle	\N	\N	100	100	100	100	1	42
759	Stufful	\N	\N	100	100	100	100	1	42
760	Bewear	\N	\N	100	100	100	100	1	42
761	Bounsweet	\N	\N	100	100	100	100	1	42
762	Steenee	\N	\N	100	100	100	100	1	42
763	Tsareena	\N	\N	100	100	100	100	1	42
764	Comfey	\N	\N	100	100	100	100	1	42
765	Oranguru	\N	\N	100	100	100	100	1	42
766	Passimian	\N	\N	100	100	100	100	1	42
767	Wimpod	\N	\N	100	100	100	100	1	42
768	Golisopod	\N	\N	100	100	100	100	1	42
769	Sandygast	\N	\N	100	100	100	100	1	42
770	Palossand	\N	\N	100	100	100	100	1	42
771	Pyukumuku	\N	\N	100	100	100	100	1	42
772	Type: Null	\N	\N	100	100	100	100	1	42
773	Silvally	\N	\N	100	100	100	100	1	42
774	Minior	\N	\N	100	100	100	100	1	42
775	Komala	\N	\N	100	100	100	100	1	42
776	Turtonator	\N	\N	100	100	100	100	1	42
777	Togedemaru	\N	\N	100	100	100	100	1	42
778	Mimikyu	\N	\N	100	100	100	100	1	42
779	Bruxish	\N	\N	100	100	100	100	1	42
780	Drampa	\N	\N	100	100	100	100	1	42
781	Dhelmise	\N	\N	100	100	100	100	1	42
782	Jangmo-o	\N	\N	100	100	100	100	1	42
783	Hakamo-o	\N	\N	100	100	100	100	1	42
784	Kommo-o	\N	\N	100	100	100	100	1	42
785	Tapu Koko	\N	\N	100	100	100	100	1	42
786	Tapu Lele	\N	\N	100	100	100	100	1	42
787	Tapu Bulu	\N	\N	100	100	100	100	1	42
788	Tapu Fini	\N	\N	100	100	100	100	1	42
789	Cosmog	\N	\N	100	100	100	100	1	42
790	Cosmoem	\N	\N	100	100	100	100	1	42
791	Solgaleo	\N	\N	100	100	100	100	1	42
792	Lunala	\N	\N	100	100	100	100	1	42
793	Nihilego	\N	\N	100	100	100	100	1	42
794	Buzzwole	\N	\N	100	100	100	100	1	42
795	Pheromosa	\N	\N	100	100	100	100	1	42
796	Xurkitree	\N	\N	100	100	100	100	1	42
797	Celesteela	\N	\N	100	100	100	100	1	42
798	Kartana	\N	\N	100	100	100	100	1	42
799	Guzzlord	\N	\N	100	100	100	100	1	42
800	Necrozma	\N	\N	100	100	100	100	1	42
801	Magearna	\N	\N	100	100	100	100	1	42
802	Marshadow	\N	\N	100	100	100	100	1	42
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, password, email, role, photo, verified) FROM stdin;
1	test	$2b$12$BLdiVF8odY4cd17waAtMnO1sDPtiX/PTvuTeQr1ofiltTgLnLZDpG	test@gmail.com	user	\N	\N
2	test1	$2b$12$vtwtM9RupkOw6mdhJvY5eeGtBYW7BvfF8/PEWqR/vArpMkOOoeQsa	test1@gmail.com	user	\N	\N
3	test2	$2b$12$yJk15F0SZU8W8VBCpUeUMuGBnvp0DrctKQtla7cp6h.xOC67Rol7W	test2@gmail.com	user	\N	\N
4	admin	$2b$12$6av4BzHZ/O3Q/TifRvhEw.gynmB6q0terpimotXtWySzxHLMZeIO2	admin@gmail.com	admin	\N	\N
5	user	$2b$12$XonrpOEQTUyljXz5a2Ukcuwg97Ue.tssZ3XgNB.HuzsVfDpoYMM1q	user@gmail.com	user	\N	\N
7	guest	$2b$12$n7fjTmfEBU0XFHm5oNYMhuympeG4XJXiNxhPtfHXgu.E.TGyzPd1q	guest@gmail.com	user	\N	\N
\.


--
-- Name: seq_user_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_user_id', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 7, true);


--
-- Name: pokemon pokemon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--